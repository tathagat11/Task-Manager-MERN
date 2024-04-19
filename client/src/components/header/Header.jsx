import "./header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="header">
        <div className="header__logo">
          <Link className="name" style={{fontSize:"25px", paddingTop:"14px"}}>Task Manager
          </Link>
          <FontAwesomeIcon icon={faListCheck} className="header__logo__taskIcon"/>
        </div>
        <div className="header__buttons">
          <Link to="/signin" className="links">Sign In</Link>
          <Link className="links">Sign Out</Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
