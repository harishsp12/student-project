import { useNavigate } from "react-router-dom";


export default function AdminDashboard(){
  const nav = useNavigate();
  return (
    <>
    <div className="container">
      <div className="admin-container">
      <h2 className="admin">Admin Dashboard</h2>
      
      <button onClick={()=>nav("/admin/student-management")} className="manage">Student Management</button>
      
      <button onClick={()=>nav("/admin/staff-management")} className="manage">Staff Management</button>
      
      </div>
      </div>
    </>
  );
}
