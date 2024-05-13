import './App.css'
import TodoItems from './components/TodoItems';
import { ErrorMsg } from './components/ErrorMsg';
import { AddTodo } from './components/AddTodo';

function App() {

  return (
    <>
      <h1 className='module-row'>Todo App</h1>
      <AddTodo />
      <ErrorMsg />
      <TodoItems />
    </>
  )
}

export default App
