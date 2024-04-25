import { Link } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Dashboard.scss";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllTasks } from "../../redux/taskSlice";

const Dashboard = () => {
  const taskList = useSelector((state) => state.task);
  const { AllTasks } = taskList;
  const user = useSelector((state) => state.auth);
  const { currentUser } = user;

  let currentTasks = [];
  let completedTasks = [];
  let backlogTasks = [];

  for (let i = 0; i < AllTasks.length; i++) {
    if (AllTasks[i].status === "backlog") {
      backlogTasks.push(AllTasks[i]);
    } else if (AllTasks[i].status === "done") {
      completedTasks.push(AllTasks[i]);
    } else {
      currentTasks.push(AllTasks[i]);
    }
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTasks(currentUser.token, currentUser.id));
  }, [dispatch, currentUser.token, currentUser.id]);
  return (
    <div className="dashboard">
      <div className="left">
        <Sidebar />
      </div>
      <div className="right">
        <div className="rightContent">
          <div className="h2div">
            <h2>Task Status</h2>
          </div>
          <div className="taskCount">
            <div className="box">
              <div className="title">Completed Tasks</div>
              <div className="count">{completedTasks.length}</div>
            </div>
            <div className="box">
              <div className="title">Ongoing Tasks</div>
              <div className="count">{currentTasks.length}</div>
            </div>
            <div className="box">
              <div className="title">Backlog Tasks</div>
              <div className="count">{backlogTasks.length}</div>
            </div>
          </div>
          <div className="createButton">
            <Link to={"/taskmanager"} className="button2">
              View/Add Tasks
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
