import { Link } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Dashboard.scss";

const Dashboard = () => {
  return (
      <div className="dashboard">
        <div className="left">
          <Sidebar />
        </div>
        <div className="right">
          <div className="rightContent">
            <div className="h2div"><h2>Task Status</h2></div>
            <div className="taskCount">
              <div className="todo box">todo</div>
              <div className="doing box">doing</div>
              <div className="done box">done</div>
            </div>
            <div className="createButton">
              <Link to={"/taskmanager"} className="button">
                New Task
              </Link>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Dashboard;
