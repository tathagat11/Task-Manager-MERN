import "./header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutSuccess } from "../../redux/authSlice";
import history from "../../history";

const Header = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  const handleLogout = (event) =>{
    event.preventDefault();
    dispatch(logoutSuccess());
    localStorage.removeItem('auth');
    history.push('/');
    window.location.reload();
  }
  return (
    <div>
      <nav className="header">
        <div className="header__logo">
          <Link
            className="name"
            to={"/"}
            style={{ fontSize: "25px", paddingTop: "14px" }}
          >
            Task Manager
          </Link>
          <FontAwesomeIcon
            icon={faListCheck}
            className="header__logo__taskIcon"
          />
        </div>
        <div className="header__buttons">
          {auth.currentUser && auth.currentUser.token ? (
            <Link className="links" onClick={handleLogout}>
              Sign Out
            </Link>
          ) : (
            <>
              <Link to="/signin" className="links">
                Sign In
              </Link>
              <Link to="/signup" className="links">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
