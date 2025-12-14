
import Header from "../components/Header";
import { Link } from "react-router-dom";
export default function Register(){
  return (
    <>
      <Header title="Register" />
      <div className="container card">
        <p>Registration Form (connected)</p>
        <Link className="link" to="/">Back to Login</Link>
      </div>
    </>
  );
}
