import { useLocation } from "react-router-dom";
import "../../styles/profile.css";

export default function StaffProfile() {
  const location = useLocation();
  const staffId = location.state?.staffId;

  /*
    Backend connect panna place:
    axios.get(`/staff/${staffId}`)
  */

  // TEMP dummy data (backend connect panna replace pannunga)
  const staff = {
    id: staffId,
    staffName: "Suresh Kumar",
    dob: "1990-04-12",
    gender: "Male",
    staffClass: "Mathematics",
    email: "suresh.kumar@gmail.com",
    phoneNo: "9123456789",
    address: "Chennai",
    aadharNo: "987654321098",
    salary: 35000
  };

  return (
    <div className="profile-container">
      <h2>Staff Profile</h2>

      <div className="profile-card">
        <p><b>ID:</b> {staff.id}</p>
        <p><b>Name:</b> {staff.staffName}</p>
        <p><b>DOB:</b> {staff.dob}</p>
        <p><b>Gender:</b> {staff.gender}</p>
        <p><b>Class:</b> {staff.staffClass}</p>
        <p><b>Email:</b> {staff.email}</p>
        <p><b>Phone:</b> {staff.phoneNo}</p>
        <p><b>Address:</b> {staff.address}</p>
        <p><b>Aadhar:</b> {staff.aadharNo}</p>
        <p><b>Salary:</b> ₹{staff.salary}</p>
      </div>

      <p className="note">
        * This page is view only. Editing is not allowed.
      </p>
    </div>
  );
}
