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
      return;
    }

    if (name === "email") {
      setStaff({ ...staff, email: value.toLowerCase() });
      return;
    }

    if (name === "phoneNo" || name === "aadharNo" || name === "salary") {
      setStaff({ ...staff, [name]: value });
      return;
    }

    setStaff({ ...staff, [name]: capitalizeFirst(value) });
  };

  const handleSubmit = () => {
    const empty = validateEmptyFields(staff);
    if (empty) {
      toast.error("Please fill this field");
      return;
    }

    if (!validateEmail(staff.email)) {
      toast.error("Email must be @gmail.com");
      return;
    }

    if (!validatePhone(staff.phoneNo)) {
      toast.error("Phone number must be 10 digits");
      return;
    }

    if (!validateAadhar(staff.aadharNo)) {
      toast.error("Aadhar number must be 12 digits");
      return;
    }

    onSubmit(staff);
    toast.success(editData ? "Staff updated" : "Staff created");
    setStaff(initialStaff);
  };

  return (
    <div className="form-container">
      <h3>{editData ? "Update Staff" : "Create Staff"}</h3>

      <input name="staffName" placeholder="Staff Name"
        value={staff.staffName} onChange={handleChange} />

      <input type="date" name="dob"
        value={staff.dob} onChange={handleChange} />

      <input value={staff.password}
        placeholder="Password (DOB)" readOnly />

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

      <select name="staffClass"
        value={staff.staffClass} onChange={handleChange}>
        <option value="">Select Class</option>
        <option>Play Ground</option>
        <option>Nursery</option>
        <option>Junior KG</option>
        <option>Senior KG</option>
      </select>

      <input name="email" placeholder="Gmail ID"
        value={staff.email} onChange={handleChange} />

      <input name="phoneNo" placeholder="10 digit Phone"
        value={staff.phoneNo} onChange={handleChange} />

      <input name="address" placeholder="Address"
        value={staff.address} onChange={handleChange} />

      <input name="aadharNo" placeholder="12 digit Aadhar"
        value={staff.aadharNo} onChange={handleChange} />

      <input name="salary" placeholder="Salary"
        value={staff.salary} onChange={handleChange} />

      <button onClick={handleSubmit} className="sub-btn">
        {editData ? "Update" : "Submit"}
      </button>
    </div>
  );
}
