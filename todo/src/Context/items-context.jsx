import { createContext, useContext, useState } from "react";
import { v1 as uuid } from 'uuid' 

const itemsContext = createContext({
  todos: [],
  addTodo: () => { },
  deleteTodo: () => { }
});

const useItem = () => useContext(itemsContext);

const ItemContextProvider =({children}) =>{
  const [todos, setTodos] = useState([]);
  
  const addTodo = (val, date) => {
    if(val !== undefined && date !== undefined){
      setTodos((currentValue)=>[
        ...currentValue,
        {name: val, date: date, id:uuid()}
      ]);
    }
  }
  
  const deleteTodo = (item) => {
    const newTodo = todos.filter(todo => todo.id !== item.id);
    setTodos(newTodo);
  }


  return(
    <itemsContext.Provider value={
      {
        todos,
        addTodo,
        deleteTodo
      }
    }>
      {children}
    </itemsContext.Provider>
  )
}

export { useItem, ItemContextProvider}