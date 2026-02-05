export default function AttendanceList({ records }) {
  if (!records.length) {
    return (
      <p className="text-gray-500 mt-4">
        No attendance records found.
      </p>
    );
  }

  return (
    <ul className="mt-4 space-y-2">
      {records.map(record => (
        <li
          key={record._id}
          className="flex justify-between bg-gray-50 border px-4 py-2 rounded"
        >
          <span>{record.date}</span>
          <span
            className={
              record.status === "present"
                ? "text-green-600 font-medium"
                : "text-red-600 font-medium"
            }
          >
            {record.status}
          </span>
        </li>
      ))}
    </ul>
  );
}
