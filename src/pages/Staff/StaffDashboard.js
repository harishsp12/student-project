import { useNavigate, useLocation } from "react-router-dom";
import "../../styles/dashboard.css";

export default function StaffDashboard() {
  const navigate = useNavigate();
  const location = useLocation();

  // login-la pass pannina staffId
  const staffId = location.state?.staffId;

  return (
    <div className="dashboard-container">
      <h2>Staff Dashboard</h2>
      <p>Welcome Staff ID: {staffId}</p>

      <div className="box-container">
        <div
          className="dash-box"
          onClick={() =>
            navigate("/staff/student-management", {
              state: { staffId }
            })
          }
        >
          <h3>Student Management</h3>
        </div>

        <div
          className="dash-box"
          onClick={() =>
            navigate("/staff/profile", {
              state: { staffId }
            })
          }
        >
          <h3>Staff Profile</h3>
        </div>
      </div>
    </div>
  );
}
