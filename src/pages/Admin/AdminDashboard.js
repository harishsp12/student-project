import { useNavigate } from "react-router-dom";

export default function AdminDashboard(){
  const nav = useNavigate();
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <button onClick={()=>nav("/admin/student-management")}>Student Management</button>
      <button onClick={()=>nav("/admin/staff-management")}>Staff Management</button>
    </div>
  );
}
