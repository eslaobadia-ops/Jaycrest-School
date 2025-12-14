
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Protected from "./components/Protected";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Student from "./pages/Student";
import Results from "./pages/Results";
import Payments from "./pages/Payments";
import Admin from "./pages/Admin";

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/student" element={<Protected role="student"><Student/></Protected>} />
        <Route path="/student/results" element={<Protected role="student"><Results/></Protected>} />
        <Route path="/student/payments" element={<Protected role="student"><Payments/></Protected>} />
        <Route path="/admin" element={<Protected role="admin"><Admin/></Protected>} />
      </Routes>
    </BrowserRouter>
  );
}
