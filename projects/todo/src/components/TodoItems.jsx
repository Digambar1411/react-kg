import { TodoItem } from "./TodoItem";
import { useItem } from "../Context/items-context";

function TodoItems() {

  const { todos } = useItem();
  
  return (
    <div className="items-container">
      {todos.map(item =>
        <TodoItem  Item={item} key={item}/>
      )}
    </div>
  )
}

export default TodoItems;
