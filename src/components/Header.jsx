
import logo from "../assets/logo.png";
export default function Header({title}){
  return (
    <div className="header">
      {logo && <img src={logo} className="logo" />}
      <h3>{title}</h3>
    </div>
  );
}
