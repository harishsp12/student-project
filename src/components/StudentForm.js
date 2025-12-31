import { useEffect, useState } from "react";
import { dobToPassword } from "../utils/validation";
import "../styles/form.css";

const initialStudent = {
  studentName: "",
  dob: "",
  gender: "",
  studentClass: "",
  password: "",
  email: "",
  phoneNo: "",
  address: "",
  aadharNo: "",
  fatherName: "",
  motherName: ""
};

export default function StudentForm({ onSubmit, editData }) {
  const [student, setStudent] = useState(initialStudent);

  useEffect(() => {
    if (editData) setStudent(editData);
  }, [editData]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "dob") {
      setStudent({
        ...student,
        dob: value,
        password: dobToPassword(value)
      });
    } else {
      setStudent({ ...student, [name]: value });
    }
  };

  const handleSubmit = () => {
    onSubmit(student);
    setStudent(initialStudent);
  };

  return (
    <div className="form-container">
      <h3>{editData ? "Update Student" : "Create Student"}</h3>

      <input name="studentName" placeholder="Enter student name"
        value={student.studentName} onChange={handleChange} />

      <input type="date" name="dob"
        value={student.dob} onChange={handleChange} />

      <input value={student.password}
        placeholder="Password (auto from DOB)" readOnly />

      {/* Gender */}
      <div className="radio-group">
        <label>
          <input type="radio" name="gender" value="Male"
            checked={student.gender === "Male"} onChange={handleChange} /> Male
        </label>
        <label>
          <input type="radio" name="gender" value="Female"
            checked={student.gender === "Female"} onChange={handleChange} /> Female
        </label>
      </div>

      <select name="studentClass" value={student.studentClass} onChange={handleChange}>
        <option value="">Select class</option>
        <option>Play Ground</option>
        <option>Nursery</option>
        <option>Junior KG</option>
        <option>Senior KG</option>
      </select>

      <input name="email" placeholder="Enter Gmail ID"
        value={student.email} onChange={handleChange} />

      <input name="phoneNo" placeholder="Enter 10 digit phone number"
        value={student.phoneNo} onChange={handleChange} />

      <input name="address" placeholder="Enter address"
        value={student.address} onChange={handleChange} />

      <input name="aadharNo" placeholder="Enter 12 digit Aadhar number"
        value={student.aadharNo} onChange={handleChange} />

      <input name="fatherName" placeholder="Enter father name"
        value={student.fatherName} onChange={handleChange} />

      <input name="motherName" placeholder="Enter mother name"
        value={student.motherName} onChange={handleChange} />

      <button onClick={handleSubmit} className="sub-btn">
        {editData ? "Update" : "Submit"}
      </button>
    </div>
  );
}
