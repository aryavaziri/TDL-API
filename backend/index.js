require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/user");
const authRoutes = require("./routes/auth").router;
const listRoutes = require("./routes/list");

app.use(
  cors({
    origin: "http://localhost:3010",
    methods: "GET,POST,PUT,DELETE,PATCH",
    credentials: true,
  })
);

app.use(authRoutes);
app.use("/api", listRoutes);

app.use((req, res) => {
  res.status(404).send("ERROR 404 - PAGE NOT FOUND");
});

app.use((error, req, res, next) => {
  console.log(error.message);
  res.status(error.statusCode || 500).send(error.message);
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
