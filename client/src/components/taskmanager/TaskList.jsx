import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTasks } from "../../redux/taskSlice";
import ListCard from "./ListCard";
import "./TaskList.scss"

const TaskList = () => {
  const auth = useSelector((state) => state.auth);
  const tasks = useSelector((state) => state.task);
  const {currentUser} = auth;
  const {AllTasks} = tasks;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTasks(currentUser.token, currentUser.id));
  }, [dispatch, currentUser.token, currentUser.id]);
  return (
    <div className="container2">
      <ul className='list-header'>
        <li>ID</li>
        <li>Task Name</li>
        <li>Status</li>
        <li>Delete</li>
      </ul>
      {Object.values(AllTasks).map(item => {
        return <ListCard key={item._id} item={item}/>
      })}
    </div>
  )
}

export default TaskList