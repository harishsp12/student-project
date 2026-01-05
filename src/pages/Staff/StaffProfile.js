import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import api from "../../api/api";
import "../../styles/profile.css";

export default function StaffProfile() {

  const { staffId } = useLocation().state;
  const [staff, setStaff] = useState({});

  useEffect(() => {
    api.get(`/staff/${staffId}`).then(res => setStaff(res.data));
  }, [staffId]);

  return (
    <div className="profile-container">

      <h2 className="profile-title">Staff Profile</h2>
      <div className="back-wrapper">
  <Link to="/" className="back">Home</Link>
</div>

      <div className="profile-card">

        <div className="profile-row">
          <span className="profile-label">ID</span>
          <span className="profile-value">{staff.id}</span>
        </div>

        <div className="profile-row">
          <span className="profile-label">Name</span>
          <span className="profile-value">{staff.staffName}</span>
        </div>

        <div className="profile-row">
          <span className="profile-label">DOB</span>
          <span className="profile-value">{staff.dob}</span>
        </div>

        <div className="profile-row">
          <span className="profile-label">Gender</span>
          <span className="profile-value">{staff.gender}</span>
        </div>

        <div className="profile-row">
          <span className="profile-label">Class</span>
          <span className="profile-value">{staff.staffClass}</span>
        </div>

        <div className="profile-row">
          <span className="profile-label">Email</span>
          <span className="profile-value">{staff.email}</span>
        </div>

        <div className="profile-row">
          <span className="profile-label">Phone</span>
          <span className="profile-value">{staff.phoneNo}</span>
        </div>

        <div className="profile-row">
          <span className="profile-label">Address</span>
          <span className="profile-value">{staff.address}</span>
        </div>

        <div className="profile-row">
          <span className="profile-label">Aadhar</span>
          <span className="profile-value">{staff.aadharNo}</span>
        </div>

        <div className="profile-row">
          <span className="profile-label">Salary</span>
          <span className="profile-value">{staff.salary}</span>
        </div>

      </div>
    </div>
  );
}
