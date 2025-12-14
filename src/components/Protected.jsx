
import { Navigate } from "react-router-dom";
import { getAuth } from "../config/auth";
export default function Protected({children, role}){
  const auth = getAuth();
  if(!auth) return <Navigate to="/" />;
  if(role && auth.role !== role) return <Navigate to="/" />;
  return children;
}
