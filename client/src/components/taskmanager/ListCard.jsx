import "./ListCard.scss";
import { BiChevronLeft, BiChevronRight, BiTrash } from "react-icons/bi";
import { arrowClick, deleteItem } from "../../redux/taskSlice";
import { useDispatch } from "react-redux";

const ListCard = ({ item }) => {
  const dispatch = useDispatch();
  
  const ArrowClick = (string) => {
    dispatch(arrowClick(item, string));
  }

  const handleDelete = () => {
    dispatch(deleteItem(item._id))
  }

  return (
    <div>
      <ul className={`${item.status === 'done' ? 'menu completed' : 'menu'}`}>
        <li className="menuitems">{item._id}</li>
        <li className="menuitems">{item.task}</li>
        <li className="menuitems">
          <button className={`${item.status === 'done' ? 'completedbutton' : ''}`} disabled={item.status === "backlog"} onClick={() => ArrowClick('left')}>
            <BiChevronLeft />
          </button>
          <div className="status">{item.status}</div>
          <button className={`${item.status === 'done' ? 'completedbutton' : ''}`} disabled={item.status === "done"} onClick={() => ArrowClick('right')}>
            <BiChevronRight />
          </button>
        </li>
        <li className="menuitems">
        <button onClick={handleDelete}>
            <BiTrash />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ListCard;
