import './ListCard.scss'

const ListCard = ({item}) => {
  
  console.log(item);
  return (
    <div>
      <ul className="menu">
        <li className="menuitems">{item._id}</li>
        <li className="menuitems">{item.task}</li>
        <li className="menuitems">{item.status}</li>
        <li className="menuitems"><button>Do</button></li>
      </ul>
    </div>
  )
}

export default ListCard
