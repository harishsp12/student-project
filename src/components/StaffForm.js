import { useEffect, useState } from "react";
import { dobToPassword } from "../utils/validation";

export default function StaffForm({ onSubmit, editData }) {
  const [staff, setStaff] = useState({
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
  });

  useEffect(() => {
    if (editData) setStaff(editData);
  }, [editData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "dob") {
      setStaff({ ...staff, dob: value, password: dobToPassword(value) });
    } else {
      setStaff({ ...staff, [name]: value });
    }
  };

  return (
    <div>
      <h3>{editData ? "Update Staff" : "Create Staff"}</h3>

      <input name="staffName" value={staff.staffName} onChange={handleChange} />
      <input type="date" name="dob" value={staff.dob} onChange={handleChange} />
      <input name="password" value={staff.password} readOnly />
      <input name="email" value={staff.email} onChange={handleChange} />
      <input name="phoneNo" value={staff.phoneNo} onChange={handleChange} />
      <input name="address" value={staff.address} onChange={handleChange} />
      <input name="aadharNo" value={staff.aadharNo} onChange={handleChange} />
      <input name="salary" value={staff.salary} onChange={handleChange} />

      <button onClick={() => onSubmit(staff)}>
        {editData ? "Update" : "Submit"}
      </button>
    </div>
  );
}
