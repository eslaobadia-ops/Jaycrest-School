
import Header from "../components/Header";
import { setAuth as save } from "../config/auth";
import { useNavigate, Link } from "react-router-dom";
export default function Login(){
  const nav = useNavigate();
  const login = (role)=>{
    save({ token:"demo", role, paid: role==="student"? false:true });
    nav(role==="admin"?"/admin":"/student");
  }
  return (
    <>
      <Header title="Login" />
      <div className="container card">
        <button className="btn" onClick={()=>login("student")}>Login as Student</button>{" "}
        <button className="btn" onClick={()=>login("admin")}>Login as Admin</button>
        <p>New? <Link className="link" to="/register">Register</Link></p>
      </div>
    </>
  );
}
