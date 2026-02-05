import { useState } from "react";
import api from "../api/api";

export default function AttendanceForm({ employeeId, onSuccess }) {
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("present");
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await api.post(`/attendance/${employeeId}`, {
        date,
        status
      });
      setDate("");
      onSuccess();
    } catch (err) {
      setError(err.response?.data?.error || "Failed to mark attendance");
    }
  };

  return (
    <form
      onSubmit={submit}
      className="flex flex-wrap gap-3 items-center"
    >
      <input
        type="date"
        required
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="border rounded px-3 py-2"
      />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="border rounded px-3 py-2"
      >
        <option value="present">Present</option>
        <option value="absent">Absent</option>
      </select>

      <button
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Mark Attendance
      </button>

      {error && (
        <p className="text-red-600 text-sm w-full">
          {error}
        </p>
      )}
    </form>
  );
}
