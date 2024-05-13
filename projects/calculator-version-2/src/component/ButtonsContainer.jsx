function ButtonsContainer({items, handleClick}){


  return(
    <div className='btns-container'>
      {items.map(item=><button key={item} className='btn' onClick={()=>handleClick(item)}>{item}</button>)}
    </div>
  )
}

export default ButtonsContainer;