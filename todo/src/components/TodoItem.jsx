import { useItem } from '../Context/items-context';
import styles from './TodoItem.module.css';
import { MdDelete } from "react-icons/md";

export const TodoItem = ({Item}) => {
  
  const { deleteTodo } = useItem();

  return(
    <div className={`${styles['module-row']} row kg-row`}>
      <div className='col-6'>{Item.name}</div>
      <div className='col-4'>{Item.date}</div>
      <div className='col-2'>
        <button className='btn btn-danger' onClick={()=>deleteTodo(Item)}>
          <MdDelete />
        </button>
      </div>
    </div>
  )
}