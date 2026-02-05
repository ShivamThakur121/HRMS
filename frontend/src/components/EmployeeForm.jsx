import { useState } from "react";
import api from "../api/api";
import ErrorMessage from "./ErrorMessage";

export default function EmployeeForm({ onSuccess }) {
  const [form, setForm] = useState({
    employeeId: "",
    fullName: "",
    email: "",
    department: ""
  });
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await api.post("/employees", form);
      setForm({ employeeId: "", fullName: "", email: "", department: "" });
      onSuccess();
    } catch (err) {
      setError(err.response?.data?.error || "Failed to add employee");
    }
  };

  return (
    <form
      onSubmit={submit}
      className="bg-white p-6 rounded-lg shadow mb-6"
    >
      <h2 className="text-lg font-semibold mb-4">Add Employee</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {["employeeId", "fullName", "email", "department"].map((field) => (
          <input
            key={field}
            required
            type={field === "email" ? "email" : "text"}
            placeholder={field.replace(/([A-Z])/g, " $1")}
            value={form[field]}
            onChange={(e) =>
              setForm({ ...form, [field]: e.target.value })
            }
            className="border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
          />
        ))}
      </div>

      <button
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add Employee
      </button>

      {error && <ErrorMessage message={error} />}
    </form>
  );
}
