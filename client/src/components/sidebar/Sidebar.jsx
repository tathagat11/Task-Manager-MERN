import "./Sidebar.scss"
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom"

const Sidebar = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  const { currentUser } = auth;

  return (
    <div className="container">
      <ul className="sidebar">
        <li className="list-item non-link">{currentUser.username}</li>
        <li className="list-item link">
          <Link to={"/dashboard"}>Dashboard</Link>
        </li>
        <li className="list-item link">
          <Link to={"/dashboard"}>Settings</Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar