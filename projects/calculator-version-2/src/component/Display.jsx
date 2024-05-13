const Display=({displayValue})=>{
  return(
    <input className="display" type='text' readOnly value={displayValue}/>
  )
}

export default Display;