import { useState } from "react";
import api from "../../api/api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "../../styles/login.css";

export default function AdminLogin() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    try {
      await api.post("/admin/login",{email,password});
      toast.success("Admin Login Success");
      navigate("/admin-dashboard");
    } catch {
      toast.error("Admin Login Failed");
    }
  };

  return (
    <div className="login-container">
      <h2>Admin Login</h2>
      <input placeholder="Email" onChange={e=>setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)} />
      <button onClick={login}>Login</button>
    </div>
  );
}
