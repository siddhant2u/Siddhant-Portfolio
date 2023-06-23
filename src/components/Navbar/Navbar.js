import './navbar.css'
import { Person, Mail } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href='#home' className="logo">
            Siddhant Priyadarshi
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+91 9821363039</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>siddhant.contactme@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line lineOne"></span>
            <span className="line lineTwo"></span>
            <span className="line lineThree"></span>
          </div>
        </div>
      </div>
    </div>
  );
}