import { useEffect, useState } from "react";
import api from "../../api/api";
import StaffForm from "../../components/StaffForm";
import StaffTable from "../../components/StaffTable";
import toast from "react-hot-toast";

export default function StaffManagement() {
  const [staffs, setStaffs] = useState([]);
  const [editStaff, setEditStaff] = useState(null);

  const loadStaff = async () => {
    const res = await api.get("/staff/all");
    setStaffs(res.data);
  };

  useEffect(() => {
    loadStaff();
  }, []);

  const handleSubmit = async (staff) => {
    if (editStaff) {
      await api.put(`/staff/update/${editStaff.id}`, staff);
      toast.success("Staff updated");
      setEditStaff(null);
    } else {
      await api.post("/staff/save", staff);
      toast.success("Staff created");
    }
    loadStaff();
  };

  const handleEdit = (staff) => setEditStaff(staff);

  const handleDelete = async (id) => {
    await api.delete(`/staff/delete/${id}`);
    toast.success("Staff deleted");
    loadStaff();
  };

  return (
    <div>
      <h2>Staff Management</h2>

      <StaffForm onSubmit={handleSubmit} editData={editStaff} />

      <StaffTable
        staffs={staffs}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}
