
import Header from "../components/Header";
export default function Admin(){
  return (
    <>
      <Header title="Admin Dashboard" />
      <div className="container grid">
        <div className="card">Students</div>
        <div className="card">Payments Approval</div>
        <div className="card">Upload Results</div>
        <div className="card">Analytics</div>
      </div>
    </>
  );
}
