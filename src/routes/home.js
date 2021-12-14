const express = require("express");
const ctrl = require("../controllers/HomeController");
const router = express.Router({ mergeParams: true });

router.get("/", ctrl.home);

module.exports = router