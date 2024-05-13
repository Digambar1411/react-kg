import { createContext, useContext, useReducer, d } from "react";
import { v1 as uuid } from 'uuid'

const itemsContext = createContext({
  todos: [],
  addTodo: () => { },
  deleteTodo: () => { }
});

const useItem = () => useContext(itemsContext);

const ItemContextProvider = ({ children }) => {
  // const [todos, setTodos] = useState([]);

  const todosItemReducerFunc = (state, action) => {

    if (action.type === 'ADD_TODO') {
      return [...state,
      {
        name: action.payload.name,
        date: action.payload.date,
        id: action.payload.id
      }]
    }
    else if (action.type === 'DELETE_TODO') {
      return state.filter(item=>item.id !== action.payload.id);
    }
  }

  const [todos, todosDispatch] = useReducer(todosItemReducerFunc, []);

  const addTodo = (val, date) => {
    const newTodoItem = {
      type: 'ADD_TODO',
      payload: { name: val, date: date, id: uuid() }
    }
    todosDispatch(newTodoItem);
  }

  const deleteTodo = (item) => {
    const newTodos = { type: 'DELETE_TODO', payload: { id: item.id } }
    todosDispatch(newTodos);
  }


  return (
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

export { useItem, ItemContextProvider }