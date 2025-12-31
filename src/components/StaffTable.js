import "../styles/table.css";

export default function StaffTable({ staffs, onEdit, onDelete }) {

  const confirmDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this staff?")) {
      onDelete(id);
    }
  };

  return (
    <div className="table-wrapper">
      <h3>Staff Table</h3>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>DOB</th>
            <th>Gender</th>
            <th>Class</th>
            <th>Password</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Aadhar</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {staffs.length === 0 ? (
            <tr>
              <td colSpan="12">No staff found</td>
            </tr>
          ) : (
            staffs.map((s) => (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.staffName}</td>
                <td>{s.dob}</td>
                <td>{s.gender}</td>
                <td>{s.staffClass}</td>
                <td>{s.password}</td>
                <td>{s.email}</td>
                <td>{s.phoneNo}</td>
                <td>{s.address}</td>
                <td>{s.aadharNo}</td>
                <td>{s.salary}</td>

                <td className="action-col">
                  <button
                    className="btn-edit"
                    onClick={() => onEdit(s)}
                  >
                    Update
                  </button>
                  <button
                    className="btn-delete"
                    onClick={() => confirmDelete(s.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
