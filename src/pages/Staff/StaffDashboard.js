import { useNavigate,useLocation } from "react-router-dom";
import "../../styles/dashboard.css";

export default function StaffDashboard(){
  const nav = useNavigate();
  const { staffId } = useLocation().state;

  return (
    <div className="dashboard">
      <h2>Staff Dashboard</h2>
      <div className="box-wrap">
        <div className="box" onClick={()=>nav("/staff/students",{state:{staffId}})}>
          Student Management
        </div>
        <div className="box" onClick={()=>nav("/staff/profile",{state:{staffId}})}>
          Staff Profile
        </div>
      </div>
    </div>
  );
}
