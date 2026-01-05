import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api/api";
import StaffForm from "../../components/StaffForm";
import StaffTable from "../../components/StaffTable";
import toast from "react-hot-toast";
import '../../styles/management.css'


export default function StaffManagement() {
  const [staffs, setStaffs] = useState([]);
  const [editStaff, setEditStaff] = useState(null);

  

  // ✅ SAFE useEffect
  useEffect(() => {
    const loadStaff = async () => {
      try {
        const res = await api.get("/staff/all");
        setStaffs(res.data);
      } catch {
        toast.error("Failed to load staff");
      }
    };

    loadStaff();

    // cleanup optional
    return () => {};
  }, []);

  const handleSubmit = async (staff) => {
    try {
      if (editStaff) {
        await api.put(`/staff/update/${editStaff.id}`, staff);
        toast.success("Staff updated");
        setEditStaff(null);
      } else {
        await api.post("/staff/save", staff);
        toast.success("Staff created");
      }

      const res = await api.get("/staff/all");
      setStaffs(res.data);
    } catch {
      toast.error("Save failed");
    }
  };

  const handleEdit = (staff) => {
    setEditStaff(staff);
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/staff/delete/${id}`);
      toast.success("Staff deleted");

      const res = await api.get("/staff/all");
      setStaffs(res.data);
    } catch {
      toast.error("Delete failed");
    }
  };

  return (
    <div>
      {/* <Header /> */}
      <h2 style={{ textAlign: "center", color:"black" }}>
        Staff Management
      </h2>
      <div className="back-wrapper">
  <Link to="/" className="back">Home</Link>
</div>
      

      

      <StaffForm
        onSubmit={handleSubmit}
        editData={editStaff}
      />

      <StaffTable
        staffs={staffs}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}
