
import Header from "../components/Header";
import { getAuth } from "../config/auth";
import { Link } from "react-router-dom";
export default function Student(){
  const auth = getAuth();
  return (
    <>
      <Header title="Student Dashboard" />
      <div className="container">
        {!auth?.paid && <div className="notice">Results locked until payment is approved.</div>}
        <div className="nav">
          <Link className="link" to="/student/results">Results</Link>
          <Link className="link" to="/student/payments">Payments</Link>
        </div>
      </div>
    </>
  );
}
