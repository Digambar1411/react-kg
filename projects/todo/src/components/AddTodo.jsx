import { useRef } from "react";
import { MdAddToPhotos } from "react-icons/md";
import { useItem } from "../Context/items-context";

export function AddTodo() {

  const { addTodo } = useItem();

  const nameElement = useRef();
  const dateElement = useRef();

  const handleAddNewTodo=(event) =>{
    event.preventDefault();
    const todoName = nameElement.current.value
    const dueDate = dateElement.current.value
    addTodo(todoName, dueDate);
    nameElement.current.value='';
    dateElement.current.value='';
  }

  return (
    <form className="row kg-row" onSubmit={handleAddNewTodo} >
      <div className='col-6'>
        <input 
          type='text/number' 
          placeholder="type todo here" 
          ref={nameElement} 
          // className={`${nameElement.current.value === '' && 'error'}`}
        />
      </div>
      <div className='col-4'>
        <input 
          type="date" 
          ref={dateElement}  
          // className={`${dateElement.current.value === '' && 'error'}`} 
        />
      </div>
      <div className='col-2'>
        <button className='btn btn-primary'>
          <MdAddToPhotos />
        </button>
      </div>
    </form>
  )
}

 