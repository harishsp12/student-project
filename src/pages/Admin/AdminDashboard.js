import { useNavigate , Link} from "react-router-dom";
import '../../styles/management.css'

export default function AdminDashboard(){
  const nav = useNavigate();
  return (
    <>
    <div className="container">
      <div className="admin-container">
      <h2 className="admin">Admin Dashboard</h2>
      <div className="back-wrapper">
  <Link to="/" className="back">Home</Link>
</div>
      
      <button onClick={()=>nav("/admin/student-management")} className="manage">Student Management</button>
      
      <button onClick={()=>nav("/admin/staff-management")} className="manage">Staff Management</button>
      
      </div>
      </div>
    </>
  );
}
