const express = require("express");
const router = express.Router();

const interpometrieController = require("../controllers/testSport.controller");

router.get("/", interpometrieController.findAll);
router.get("/:id", interpometrieController.findById);
router.post("/", interpometrieController.create);

module.exports = router;

// wakil 1 mouhamed bou hdida
// 433/09
// 35ua
