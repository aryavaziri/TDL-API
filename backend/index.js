require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("./models/user");
const auth = require("./routes/auth");
const { isAuthenticated } = require("./controllers/auth");

app.use(auth);
app.get("/", (req, res) => {
  res.send('<a href="/login">SIGN IN</a>');
});

app.get("/auth", isAuthenticated, (req, res) => {
  res.send("<p>Authenticated successfully</p>");
});

app.get("/login", (req, res) => {
  res.send(
    "<p>Sign in please</p><br><a href='/login/google'>GOOGLE SIGN IN</a>"
  );
});

app.use((req, res) => {
  res.status(404).send("ERROR 404 - PAGE NOT FOUND");
});

mongoose
  .connect(process.env.DB_uri)
  .then(() => {
    User.findOne();
  })
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
