import { useNavigate,useLocation, Link } from "react-router-dom";
import "../../styles/dashboard.css";
import '../../styles/management.css'

export default function StaffDashboard(){
  const nav = useNavigate();
  const { staffId } = useLocation().state;

  return (
    <>
      <div className="container">
      <div className="admin-container">
      <h2>Staff Dashboard</h2>
      <div className="back-wrapper">
  <Link to="/" className="back">Home</Link>
</div>
      <div className="box-wrap">
        <button className="manage" onClick={()=>nav("/staff/students",{state:{staffId}})} >
          Student Management
        </button>
        <button className="manage" onClick={()=>nav("/staff/profile",{state:{staffId}})}>
          Staff Profile
        </button>
      </div>
    </div>
    </div>
    </>
  );
}
