const express = require("express");
const router = express.Router();
const listController = require("../controllers/list");
const { isAuth } = require("./auth");

router.get("/lists", listController.getLists);

module.exports = router;
