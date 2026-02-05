const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema(
  {
    employee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
      required: true
    },
    date: {
      type: String,
      required: true
    },
    status: {
      type: String,
      enum: ["present", "absent"],
      required: true
    }
  },
  { timestamps: true }
);

// Prevent duplicate attendance per date
attendanceSchema.index({ employee: 1, date: 1 }, { unique: true });

module.exports = mongoose.model("Attendance", attendanceSchema);
