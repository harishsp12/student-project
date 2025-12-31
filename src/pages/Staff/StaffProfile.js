import { useEffect,useState } from "react";
import { useLocation } from "react-router-dom";
import api from "../../api/api";

export default function StaffProfile(){
  const { staffId } = useLocation().state;
  const [staff,setStaff] = useState({});

  useEffect(()=>{
    api.get(`/staff/${staffId}`).then(res=>setStaff(res.data));
  },[staffId]);

  return (
    <div className="profile-card">
      <h3>Staff Profile</h3>
      <p>Name: {staff.staffName}</p>
      <p>DOB: {staff.dob}</p>
      <p>Gender: {staff.gender}</p>
      <p>Class: {staff.staffClass}</p>
      <p>Email: {staff.email}</p>
      <p>Phone: {staff.phoneNo}</p>
      <p>Address: {staff.address}</p>
      <p>Aadhar: {staff.aadharNo}</p>
      <p>Salary: {staff.salary}</p>
      {/* <p style={{color:"red"}}>* View only</p> */}
    </div>
  );
}
