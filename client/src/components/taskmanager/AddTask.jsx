import { useState } from "react";
import "./AddTask.scss";
import { addTask } from "../../redux/taskSlice";
import { useDispatch, useSelector } from "react-redux";

const AddTask = () => {
  const [task, setTask] = useState("");
  const { auth } = useSelector((state) => ({ ...state }));
  const { currentUser } = auth;
  const dispatch = useDispatch();

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task != "") {
      dispatch(addTask(task, currentUser.id));
      setTask("");
    }
  };
  return (
    <div className="addtask">
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          placeholder="Add your task."
          onChange={handleTaskChange}
          value={task}
        />
        <button className="button" type="submit">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
