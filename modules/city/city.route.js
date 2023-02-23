const express = require("express");
const router = express.Router();
const cityController = require("./city.controller");

router.get("/", cityController.getCityList);

module.exports = router;
