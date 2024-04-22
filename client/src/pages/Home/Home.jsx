import { Link } from "react-router-dom"
import "./Home.scss"
import { useSelector } from "react-redux";


const Home = () => {
  const { auth } = useSelector((state) => ({ ...state }));
	const { currentUser } = auth;
  return (
    <div className="home">
      <div className="container">
        <p>Organise it all with</p>
        <h3>TaskManager</h3>
        {currentUser && currentUser.token ? (
          <Link to={"/dashboard"} className="getStarted">Get Started</Link>
        ):(<Link to={"/signup"} className="getStarted">Get Started</Link>)}
      </div>
    </div>
  )
}

export default Home
