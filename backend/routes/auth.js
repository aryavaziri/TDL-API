const express = require("express");
const router = express.Router();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const jwt = require("jsonwebtoken");
const User = require("../models/user");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/login/google/callback",
      passReqToCallback: true,
    },
    function (request, accessToken, refreshToken, profile, done) {
      return done(null, profile);
    }
  )
);

router.get(
  "/login/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

router.get(
  "/login/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    session: false,
  }),
  async (req, res, next) => {
    if (req.user?.verified) {
      let token;
      console.log(req.user);
      const user = await User.findOneAndUpdate(
        { email: req.user.email },
        { lastLogin: Date.now() }
      );
      if (user) {
        token = jwt.sign({ id: user._id }, "SECRET_KEY", {
          expiresIn: "1h",
        });
      } else {
        await User.create({
          email: req.user.email,
          name: req.user.displayName,
          profileImg: req.user.picture,
          language: req.user.language,
        })
          .then((user) => {
            token = jwt.sign({ id: user._id }, "SECRET_KEY", {
              expiresIn: "1h",
            });
          })
          .catch(next);
      }
      console.log(token);
      return res.status(201).json({ accessToken: token });
    }
  }
);

module.exports = router;
