import "./ListCard.scss";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { arrowClick } from "../../redux/taskSlice";
import { useDispatch } from "react-redux";

const ListCard = ({ item }) => {
  const dispatch = useDispatch();
  
  const ArrowClick = (string) => {
    dispatch(arrowClick(item, string));
  }

  return (
    <div>
      <ul className="menu">
        <li className="menuitems">{item._id}</li>
        <li className="menuitems">{item.task}</li>
        <li className="menuitems">
          <button disabled={item.status === "backlog"} onClick={() => ArrowClick('left')}>
            <BiChevronLeft />
          </button>
          <div className="status">{item.status}</div>
          <button disabled={item.status === "done"} onClick={() => ArrowClick('right')}>
            <BiChevronRight />
          </button>
        </li>
        <li className="menuitems">
          <button>Do</button>
        </li>
      </ul>
    </div>
  );
};

export default ListCard;
