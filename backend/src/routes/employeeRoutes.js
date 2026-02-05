const express = require("express");
const Employee = require("../models/Employee");

const router = express.Router();

// Create employee
router.post("/", async (req, res, next) => {
  try {
    const { employeeId, fullName, email, department } = req.body;

    if (!employeeId || !fullName || !email || !department) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const employee = await Employee.create({
      employeeId,
      fullName,
      email,
      department
    });

    res.status(201).json(employee);
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        error: "Employee ID or Email already exists"
      });
    }
    next(error);
  }
});

// Get all employees
router.get("/", async (req, res, next) => {
  try {
    const employees = await Employee.find().sort({ createdAt: -1 });
    res.json(employees);
  } catch (error) {
    next(error);
  }
});

// Delete employee
router.delete("/:id", async (req, res, next) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);

    if (!employee) {
      return res.status(404).json({ error: "Employee not found" });
    }

    res.json({ message: "Employee deleted successfully" });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
