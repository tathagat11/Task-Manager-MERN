import './ListCard.scss'

const ListCard = ({item}) => {
  
  console.log(item);
  return (
    <div>
      <ul className='list-header'>
        <li>Id</li>
        <li>Issue Name</li>
        <li>Status</li>
        <li>Action</li>
      </ul>
    </div>
  )
}

export default ListCard
