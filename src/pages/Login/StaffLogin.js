import { useState } from "react";
import api from "../../api/api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "../../styles/login.css";

export default function StaffLogin() {

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {

    // basic validation
    if (!id || !password) {
      toast.error("Please enter ID and Password");
      return;
    }

    try {
      const res = await api.post("/staff/login", {
        id: id,
        password: password
      });

      toast.success("Staff Login Success");

      // next page (staff dashboard)
      navigate("/staff-dashboard", {
        state: { staffId: res.data.id }
      });

    } catch (error) {
      toast.error("Invalid Staff ID or Password");
    }
  };

  return (
    <div className="login-container">
      <h2>Staff Login</h2>

      <input
        type="number"
        placeholder="Enter Staff ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}
