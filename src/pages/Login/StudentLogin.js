import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/login.css";

export default function StudentLogin() {
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!studentId || !password) {
      toast.error("Please fill all fields");
      return;
    }

    // backend connect panna place
    // axios.post("/student/login", { id: studentId, password })

    if (password.length >= 4) {
      toast.success("Student login success");
      navigate("/student-profile", { state: { studentId } });
    } else {
      toast.error("Invalid login");
    }
  };

  return (
    <div className="login-container">
      <h2>Student Login</h2>

      <input
        type="text"
        placeholder="Student ID"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password (DOB)"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
