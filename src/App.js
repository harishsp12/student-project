// import logo from './logo.svg';
// import './App.css';

// // import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import AdminLogin from "./pages/Login/AdminLogin";
// import StaffLogin from "./pages/Login/StaffLogin";
// import StudentLogin from "./pages/Login/StudentLogin";
// import AdminDashboard from "./pages/Admin/AdminDashboard";
// import StaffDashboard from "./pages/Staff/StaffDashboard";
// import StudentProfile from "./pages/Student/StudentProfile";
// import { Toaster } from "react-hot-toast";

// function App() {
//   return (
//    <>
//     <Toaster position="top-right" />

//    <BrowserRouter>
//    <Routes>
//     {/* <Route path='/' element={<Home/>}/> */}
//     <Route path="/" element={<AdminLogin />} />
//         <Route path="/staff-login" element={<StaffLogin />} />
//         <Route path="/student-login" element={<StudentLogin />} />
//         <Route path="/admin-dashboard" element={<AdminDashboard />} />
//         <Route path="/staff-dashboard" element={<StaffDashboard />} />
//         <Route path="/student-profile" element={<StudentProfile />} />
//    </Routes>
//    </BrowserRouter>
//    </>
//   );
// }

// export default App;

import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AdminLogin from "./pages/Login/AdminLogin";
import StaffLogin from "./pages/Login/StaffLogin";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import StudentManagement from "./pages/Admin/StudentManagement";
import StaffManagement from "./pages/Admin/StaffManagement";
import StaffDashboard from "./pages/Staff/StaffDashboard";

export default function App(){
  return (
    <>
      <Toaster position="top-right"/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminLogin/>}/>
          <Route path="/staff-login" element={<StaffLogin/>}/>
          <Route path="/admin-dashboard" element={<AdminDashboard/>}/>
          <Route path="/admin/student-management" element={<StudentManagement/>}/>
          <Route path="/admin/staff-management" element={<StaffManagement/>}/>
          <Route path="/staff-dashboard" element={<StaffDashboard/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
