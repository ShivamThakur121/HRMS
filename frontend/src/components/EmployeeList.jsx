export default function EmployeeList({ employees, onSelect, onDelete, }) {
  if (!employees.length) {
    return (
      <p className="text-gray-500 text-center py-6">
        No employees found.
      </p>
    );
  }

  return (
    <div className="bg-white rounded shadow overflow-x-auto mt-6">
      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 border text-left">Name</th>
            <th className="p-3 border text-left">Email</th>
            <th className="p-3 border text-left">Department</th>
            <th className="p-3 border text-center">Attendance</th>
            <th className="p-3 border text-center">Delete</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(emp => (
            <tr key={emp._id} className="hover:bg-gray-50">
              <td className="p-3 border">{emp.fullName}</td>
              <td className="p-3 border">{emp.email}</td>
              <td className="p-3 border">{emp.department}</td>

              <td className="p-3 border text-center">
                <button
                  onClick={() => onSelect(emp)}
                  className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
                >
                  Manage
                </button>
              </td>

              <td className="p-3 border text-center">
                <button
                  onClick={() => onDelete(emp._id)}
                  className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
