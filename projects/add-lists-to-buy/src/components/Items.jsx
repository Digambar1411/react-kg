import { useState } from "react";
import { Item } from "./Item";

export function Items({items}){

  const [activeItems, setActiveItems]= useState([]);

  const handleBuyFood = (food) =>{
    setActiveItems([...activeItems,food]);
  }

  return(
    <ul className="list-group items-container">
      {items.map(item=>
        <Item
          key={item}
          item={item} 
          buyFood={handleBuyFood} 
          isActive={activeItems.includes(item)}
      />)}
    </ul>
  )
}