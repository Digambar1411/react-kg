import { useItem } from "../Context/items-context"

export function ErrorMsg(){
  const { todos } = useItem();

  return(
    todos.length === 0  && <div>There are no todos</div>
  )
}

export function ErrorMsg1(){
  const { todos } = useItem();
  
  return(
    todos.length === 0  && <div>There are no items</div>
  )
}