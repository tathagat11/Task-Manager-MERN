import "./TaskManager.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import AddTask from "../../components/taskmanager/AddTask";
import TaskList from "../../components/taskmanager/TaskList";


const TaskManager = () => {
  return (
    <div>
      <div className="taskManager">
        <div className="left">
          <Sidebar />
        </div>
        <div className="right">
          <div className="addTask">
            <AddTask />
          </div>
          <div className="taskList">
            <TaskList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskManager;
