const jwt = require("jsonwebtoken");
const User = require("../models/user");

const isAuth = async (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) {
    console.log("No token");
    return res.status(401).redirect("/login");
  }
  try {
    const userId = jwt.verify(token, "SECRET_KEY").id;
    const user = await User.findByIdAndUpdate(userId, {
      lastLogin: Date.now(),
    });
    if (user) {
      console.log("User is Authenticated");
      next();
    } else {
      console.log("User is not Authenticated");
      return res.status(401).redirect("/login");
    }
  } catch (error) {
    next(error);
  }
};
module.exports.isAuthenticated = isAuth;
