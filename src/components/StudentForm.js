import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  capitalizeFirst,
  validateEmail,
  validatePhone,
  validateAadhar,
  validateEmptyFields,
  dobToPassword
} from "../utils/validation";
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

    // DOB → password
    if (name === "dob") {
      setStudent({
        ...student,
        dob: value,
        password: dobToPassword(value)
      });
      return;
    }

    // Email → lowercase
    if (name === "email") {
      setStudent({ ...student, email: value.toLowerCase() });
      return;
    }

    // No capitalization
    if (name === "phoneNo" || name === "aadharNo") {
      setStudent({ ...student, [name]: value });
      return;
    }

    // Capitalize others
    setStudent({ ...student, [name]: capitalizeFirst(value) });
  };

  const handleSubmit = () => {
    const empty = validateEmptyFields(student);
    if (empty) {
      toast.error("Please fill this field");
      return;
    }

    if (!validateEmail(student.email)) {
      toast.error("Email must be @gmail.com");
      return;
    }

    if (!validatePhone(student.phoneNo)) {
      toast.error("Phone number must be 10 digits");
      return;
    }

    if (!validateAadhar(student.aadharNo)) {
      toast.error("Aadhar number must be 12 digits");
      return;
    }

    onSubmit(student);
    toast.success(editData ? "Student updated" : "Student created");
    setStudent(initialStudent);
  };

  return (
    <div className="form-container">
      <h3>{editData ? "Update Student" : "Create Student"}</h3>

      <input name="studentName" placeholder="Student Name"
        value={student.studentName} onChange={handleChange} />

      <input type="date" name="dob"
        value={student.dob} onChange={handleChange} />

      <input value={student.password}
        placeholder="Password (DOB)" readOnly />

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

      <select name="studentClass"
        value={student.studentClass} onChange={handleChange}>
        <option value="">Select Class</option>
        <option>Play Ground</option>
        <option>Nursery</option>
        <option>Junior KG</option>
        <option>Senior KG</option>
      </select>

      <input name="email" placeholder="Gmail ID"
        value={student.email} onChange={handleChange} />

      <input name="phoneNo" placeholder="10 digit Phone"
        value={student.phoneNo} onChange={handleChange} />

      <input name="address" placeholder="Address"
        value={student.address} onChange={handleChange} />

      <input name="aadharNo" placeholder="12 digit Aadhar"
        value={student.aadharNo} onChange={handleChange} />

      <input name="fatherName" placeholder="Father Name"
        value={student.fatherName} onChange={handleChange} />

      <input name="motherName" placeholder="Mother Name"
        value={student.motherName} onChange={handleChange} />

      <button onClick={handleSubmit} className="sub-btn">
        {editData ? "Update" : "Submit"}
      </button>
    </div>
  );
}
