import { useState } from "react";
import api from "../../api/api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function StaffLogin(){
  const [id,setId]=useState("");
  const [password,setPassword]=useState("");
  const navigate=useNavigate();

  const login = async()=>{
    try{
      await api.post("/staff/login",{id,password});
      toast.success("Staff Login Success");
      navigate("/staff-dashboard",{state:{staffId:id}});
    }catch{
      toast.error("Login Failed");
    }
  };

  return (
    <div className="login-container">
      <h2>Staff Login</h2>
      <input placeholder="Staff ID" onChange={e=>setId(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)} />
      <button onClick={login}>Login</button>
    </div>
  );
}
