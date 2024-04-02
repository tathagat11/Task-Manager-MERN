import "./header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faListCheck } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div>
      <nav className="header">
        <div className="header__logo">
          <h3>Task Manager
          </h3>
          <FontAwesomeIcon icon={faListCheck} className="header__logo__taskIcon"/>
        </div>
        <div className="header__buttons">
          <button>Sign In</button>
          <button>Sign Out</button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
