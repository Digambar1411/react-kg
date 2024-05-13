function ButtonsContainer({items}){
  return(
    <div className='btns-container'>
      {items.map(item=><button key={item}className='btn'>{item}</button>)}
    </div>
  )
}

export default ButtonsContainer;