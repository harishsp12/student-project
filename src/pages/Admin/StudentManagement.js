import { useEffect, useState } from "react";
import api from "../../api/api";
import StudentForm from "../../components/StudentForm";
import StudentTable from "../../components/StudentTable";
import toast from "react-hot-toast";

export default function StudentManagement() {
  const [students, setStudents] = useState([]);
  const [editStudent, setEditStudent] = useState(null);

  const loadStudents = async () => {
    const res = await api.get("/student/all");
    setStudents(res.data);
  };

  useEffect(() => {
    loadStudents();
  }, []);

  // CREATE or UPDATE
  const handleSubmit = async (student) => {
    if (editStudent) {
      await api.put(`/student/update/${editStudent.id}`, student);
      toast.success("Student updated");
      setEditStudent(null);
    } else {
      await api.post("/student/save", student);
      toast.success("Student created");
    }
    loadStudents();
  };

  // EDIT
  const handleEdit = (student) => {
    setEditStudent(student);
  };

  // DELETE
  const handleDelete = async (id) => {
    await api.delete(`/student/delete/${id}`);
    toast.success("Student deleted");
    loadStudents();
  };

  return (
    <div>
      <h2>Student Management</h2>

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
