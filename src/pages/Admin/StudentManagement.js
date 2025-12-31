import { useEffect, useState } from "react";
import api from "../../api/api";
import StudentForm from "../../components/StudentForm";
import StudentTable from "../../components/StudentTable";
import toast from "react-hot-toast";

export default function StudentManagement() {
  const [students, setStudents] = useState([]);
  const [editStudent, setEditStudent] = useState(null);

  // ✅ SAFE useEffect (NO destroy error)
  useEffect(() => {
    const loadStudents = async () => {
      try {
        const res = await api.get("/student/all");
        setStudents(res.data);
      } catch (err) {
        toast.error("Failed to load students");
      }
    };

    loadStudents();

    // ✅ cleanup MUST be function
    return () => {
      // nothing to cleanup now
    };
  }, []);

  // CREATE / UPDATE
  const handleSubmit = async (student) => {
    try {
      if (editStudent) {
        await api.put(`/student/update/${editStudent.id}`, student);
        toast.success("Student updated");
        setEditStudent(null);
      } else {
        await api.post("/student/save", student);
        toast.success("Student created");
      }

      const res = await api.get("/student/all");
      setStudents(res.data);
    } catch {
      toast.error("Save failed");
    }
  };

  // EDIT
  const handleEdit = (student) => {
    setEditStudent(student);
  };

  // DELETE
  const handleDelete = async (id) => {
    try {
      await api.delete(`/student/delete/${id}`);
      toast.success("Student deleted");

      const res = await api.get("/student/all");
      setStudents(res.data);
    } catch {
      toast.error("Delete failed");
    }
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Student Management</h2>

      <StudentForm
        onSubmit={handleSubmit}
        editData={editStudent}
      />

      <StudentTable
        students={students}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}
