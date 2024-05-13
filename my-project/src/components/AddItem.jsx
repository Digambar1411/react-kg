export function AddItem(props){
  return(
    <div className="my-row">
      <input type="text" className="input" onKeyDown={props.handleKeyDownEvent}/>
      {/* <button className="btn btn-success add-btn" onClick={props.handleAdd}>Add</button> */}
    </div>
  )
}