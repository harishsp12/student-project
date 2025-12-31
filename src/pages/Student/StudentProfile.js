import { useLocation } from "react-router-dom";
import "../../styles/profile.css";

export default function StudentProfile() {
  const location = useLocation();
  const studentId = location.state?.studentId;

  /*
    Backend connect panna place:
    axios.get(`/student/${studentId}`)
    .then(res => setStudent(res.data))
  */

  // TEMP dummy data (backend connect panna replace pannunga)
  const student = {
    id: studentId,
    studentName: "Ravi Kumar",
    dob: "2008-06-15",
    gender: "Male",
    studentClass: "Senior KG",
    email: "ravi.kumar@gmail.com",
    phoneNo: "9876543210",
    address: "Chennai",
    aadharNo: "123412341234",
    fatherName: "Kumar",
    motherName: "Lakshmi"
  };

  return (
    <div className="profile-container">
      <h2>Student Profile</h2>

      <div className="profile-card">
        <p><b>ID:</b> {student.id}</p>
        <p><b>Name:</b> {student.studentName}</p>
        <p><b>DOB:</b> {student.dob}</p>
        <p><b>Gender:</b> {student.gender}</p>
        <p><b>Class:</b> {student.studentClass}</p>
        <p><b>Email:</b> {student.email}</p>
        <p><b>Phone:</b> {student.phoneNo}</p>
        <p><b>Address:</b> {student.address}</p>
        <p><b>Aadhar:</b> {student.aadharNo}</p>
        <p><b>Father Name:</b> {student.fatherName}</p>
        <p><b>Mother Name:</b> {student.motherName}</p>
      </div>

      {/* <p className="note">
        * This page is view only. Editing is not allowed.
      </p> */}
    </div>
  );
}
