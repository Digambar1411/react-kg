export function ErrorMsg({items}){
  
  return(
    items.length === 0  && <div>There are no food items</div>
  )
}