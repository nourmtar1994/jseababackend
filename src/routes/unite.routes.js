const express = require("express");
const router = express.Router();
const uniteController = require("../controllers/unite.controller");

router.get("/", uniteController.findAll);

module.exports = router;
