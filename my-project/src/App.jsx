import { useState } from 'react'
import './App.css'
import { Items } from './components/Items';
import { AddItem } from './components/AddItem';
import { ErrorMsg } from './components/ErrorMessage';

function App() {
  const [loading, setLoading] = useState(false);
  const items = ['dal','sabji', 'rice', 'wheat','milk'];
  const [foodItems, setFoodItems]= useState(items);

  function save(){
    setLoading(true);
    setTimeout(()=>{setLoading(false)},3000);
  }

  function handleKeyDown(e){
    if(e.key === "Enter"){
      const newFoodItem = e.target.value;
      e.target.value = '';
      setFoodItems([...foodItems,newFoodItem]);
    }
  }


  // return (
  //   <>
  //     <div onClick={save}>
  //       { loading 
  //       ? 
  //       <button class="btn btn-primary" type="button" disabled>
  //       <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
  //       <span role="status">Loading...</span>
  //     </button>
  //       :
  //       <button type="button" class="btn btn-primary">Primary</button>
  //       }
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )

  return(
    <div className="container">
      <h1>Lists</h1>
      <AddItem 
        handleKeyDownEvent={handleKeyDown} 
      />
      {/* <p>Your Value : {value}</p> */}
      <ErrorMsg items={foodItems} />
      <Items items={foodItems} />
    </div>
  )
}

export default App
