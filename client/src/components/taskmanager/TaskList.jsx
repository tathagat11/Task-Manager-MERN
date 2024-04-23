import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTasks } from "../../redux/taskSlice";

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
    <div>
      {Object.values(AllTasks).map(item => {
        return <li key={item._id}>{item.task}</li>
      })}
    </div>
  )
}

export default TaskList