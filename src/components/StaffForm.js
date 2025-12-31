import { useEffect, useState } from "react";
import { dobToPassword } from "../utils/validation";
import "../styles/form.css";

const initialStaff = {
  staffName: "",
  dob: "",
  gender: "",
  staffClass: "",
  password: "",
  email: "",
  phoneNo: "",
  address: "",
  aadharNo: "",
  salary: ""
};

export default function StaffForm({ onSubmit, editData }) {
  const [staff, setStaff] = useState(initialStaff);

  useEffect(() => {
    if (editData) setStaff(editData);
  }, [editData]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "dob") {
      setStaff({
        ...staff,
        dob: value,
        password: dobToPassword(value)
      });
    } else {
      setStaff({ ...staff, [name]: value });
    }
  };

  const handleSubmit = () => {
    onSubmit(staff);
    setStaff(initialStaff);
  };

  return (
    <div className="form-container">
      <h3>{editData ? "Update Staff" : "Create Staff"}</h3>

      <input name="staffName" placeholder="Enter staff name"
        value={staff.staffName} onChange={handleChange} />

      <input type="date" name="dob"
        value={staff.dob} onChange={handleChange} />

      <input value={staff.password}
        placeholder="Password (auto from DOB)" readOnly />

      {/* Gender */}
      <div className="radio-group">
        <label>
          <input type="radio" name="gender" value="Male"
            checked={staff.gender === "Male"} onChange={handleChange} /> Male
        </label>
        <label>
          <input type="radio" name="gender" value="Female"
            checked={staff.gender === "Female"} onChange={handleChange} /> Female
        </label>
      </div>

      <select name="staffClass" value={staff.staffClass} onChange={handleChange}>
        <option value="">Select class</option>
        <option>Play Ground</option>
        <option>Nursery</option>
        <option>Junior KG</option>
        <option>Senior KG</option>
      </select>

      <input name="email" placeholder="Enter Gmail ID"
        value={staff.email} onChange={handleChange} />

      <input name="phoneNo" placeholder="Enter 10 digit phone number"
        value={staff.phoneNo} onChange={handleChange} />

      <input name="address" placeholder="Enter address"
        value={staff.address} onChange={handleChange} />

      <input name="aadharNo" placeholder="Enter 12 digit Aadhar number"
        value={staff.aadharNo} onChange={handleChange} />

      <input name="salary" placeholder="Enter salary"
        value={staff.salary} onChange={handleChange} />

      <button onClick={handleSubmit} className="sub-btn">
        {editData ? "Update" : "Submit"}
      </button>
    </div>
  );
}
