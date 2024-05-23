export function Item({key, item, buyFood, isActive}){

  console.log("isActive", isActive);
  return(
    <li className={`list-group-item ${isActive && 'active'}`} key={key}>
      <span>{item}</span>
      <button 
        className='btn btn-info my-btn'
        onClick={()=>buyFood(item)}
      >
        Buy
      </button>
    </li>
  )
}