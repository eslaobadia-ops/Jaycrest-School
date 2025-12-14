
import Header from "../components/Header";
import { getAuth } from "../config/auth";
export default function Results(){
  const auth = getAuth();
  return (
    <>
      <Header title="Results" />
      <div className="container card">
        {auth?.paid ? "Results visible" : "Payment required to view results."}
      </div>
    </>
  );
}
