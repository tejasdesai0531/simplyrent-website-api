var express = require("express");
var router = express.Router();

const cityRouter = require("./city/city.route");
const bannerRouter = require("./banner/banner.route");
router.use("/city", cityRouter);
router.use("/banner", bannerRouter);

module.exports = router;
