const express = require("express");
const Attendance = require("../models/Attendance");
const Employee = require("../models/Employee");

const router = express.Router();


// ⭐ BONUS — Total present days summary (MOVE FIRST)
router.get("/summary/:employeeId", async (req, res) => {
  try {
    const totalPresent = await Attendance.countDocuments({
      employee: req.params.employeeId,

      // Case-insensitive count
      status: { $regex: "^present$", $options: "i" }
    });

    res.json({ totalPresent });

  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch summary"
    });
  }
});


// ✅ Get attendance records per employee
router.get("/:employeeId", async (req, res) => {
  try {
    const records = await Attendance.find({
      employee: req.params.employeeId
    }).sort({ date: -1 });

    res.json(records);

  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch attendance"
    });
  }
});


// ✅ Mark attendance
router.post("/:employeeId", async (req, res) => {
  try {
    const { date, status } = req.body;

    if (!date || !status) {
      return res.status(400).json({
        error: "Date and status are required"
      });
    }

    const employee = await Employee.findById(
      req.params.employeeId
    );

    if (!employee) {
      return res.status(404).json({
        error: "Employee not found"
      });
    }

    const attendance = await Attendance.create({
      employee: employee._id,
      date,

      // Normalize status to lowercase
      status: status.toLowerCase()
    });

    res.status(201).json(attendance);

  } catch (error) {

    if (error.code === 11000) {
      return res.status(409).json({
        error:
          "Attendance already marked for this date"
      });
    }

    res.status(500).json({
      error: "Failed to mark attendance"
    });
  }
});

module.exports = router;
