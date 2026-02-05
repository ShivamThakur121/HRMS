import { useContext, useEffect, useState } from "react";
import api from "../api/api";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeList from "../components/EmployeeList";
import AttendanceForm from "../components/AttendanceForm";
import AttendanceList from "../components/AttendanceList";
import Loader from "../components/Loader";

export default function Dashboard() {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [attendance, setAttendance] = useState([]);
  const [presentCount, setPresentCount] = useState(0);
  const [loading, setLoading] = useState(true);

  // Load employees
  const loadEmployees = async () => {
    setLoading(true);
    const res = await api.get("/employees");
    setEmployees(res.data);
    setLoading(false);
  };

  // Load attendance
  const loadAttendance = async (employeeId) => {
    const res = await api.get(
      `/attendance/${employeeId}`
    );
    setAttendance(res.data);

    const summary = await api.get(
      `/attendance/summary/${employeeId}`
    );
    setPresentCount(summary.data.totalPresent);
  };

  // Delete employee
  const deleteEmployee = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this employee?"
    );

    if (!confirmDelete) return;

    await api.delete(`/employees/${id}`);

    if (selectedEmployee?._id === id) {
      setSelectedEmployee(null);
      setAttendance([]);
      setPresentCount(0);
    }

    loadEmployees();
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-2xl font-bold mb-6">
          HRMS Lite — Admin Dashboard
        </h1>

        <EmployeeForm onSuccess={loadEmployees} />

        <EmployeeList
          employees={employees}
          onSelect={(emp) => {
            setSelectedEmployee(emp);
            loadAttendance(emp._id);
          }}
          onDelete={deleteEmployee}
        />

        {selectedEmployee && (
          <div className="mt-8 bg-white p-6 rounded shadow">

            <h2 className="text-xl font-semibold mb-4">
              Attendance Management —{" "}
              {selectedEmployee.fullName}
            </h2>

            <AttendanceForm
              employeeId={selectedEmployee._id}
              onSuccess={() =>
                loadAttendance(selectedEmployee._id)
              }
            />

            {/* ⭐ BONUS SUMMARY */}
            <div className="mt-6 bg-green-50 border border-green-200 p-4 rounded">
              <p className="text-green-700 font-medium">
                Total Present Days: {presentCount}
              </p>
            </div>

            <div className="mt-6">
              <h3 className="font-medium mb-2">
                Attendance Records
              </h3>

              <AttendanceList records={attendance} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
