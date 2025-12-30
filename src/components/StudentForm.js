import { useEffect, useState } from "react";
import { dobToPassword } from "../utils/validation";

export default function StudentForm({ onSubmit, editData }) {
  const [student, setStudent] = useState({
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
  });

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

  return (
    <div>
      <h3>{editData ? "Update Student" : "Create Student"}</h3>

      <input name="studentName" value={student.studentName} onChange={handleChange} placeholder="Name" />
      <input type="date" name="dob" value={student.dob} onChange={handleChange} />
      <input name="password" value={student.password} readOnly />

      <select name="gender" value={student.gender} onChange={handleChange}>
        <option value="">Gender</option>
        <option>Male</option>
        <option>Female</option>
      </select>

      <select name="studentClass" value={student.studentClass} onChange={handleChange}>
        <option value="">Class</option>
        <option>Play Ground</option>
        <option>Nursery</option>
        <option>Junior KG</option>
        <option>Senior KG</option>
      </select>

      <input name="email" value={student.email} onChange={handleChange} placeholder="Email" />
      <input name="phoneNo" value={student.phoneNo} onChange={handleChange} placeholder="Phone" />
      <input name="address" value={student.address} onChange={handleChange} placeholder="Address" />
      <input name="aadharNo" value={student.aadharNo} onChange={handleChange} placeholder="Aadhar" />
      <input name="fatherName" value={student.fatherName} onChange={handleChange} placeholder="Father Name" />
      <input name="motherName" value={student.motherName} onChange={handleChange} placeholder="Mother Name" />

      <button onClick={() => onSubmit(student)}>
        {editData ? "Update" : "Submit"}
      </button>
    </div>
  );
}
