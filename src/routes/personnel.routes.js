const express = require("express");
const router = express.Router();
const personnelController = require("../controllers/personnel.controller");

// Retrieve all employees
router.get("/", personnelController.findAll);

// Create a new employee
router.post("/", personnelController.create);

// Retrieve a single employee with id
router.get("/:id", personnelController.findById);

// Update a employee with id
router.put("/:id", personnelController.update);

// Delete a employee with id
router.delete("/:id", personnelController.delete);

module.exports = router;
