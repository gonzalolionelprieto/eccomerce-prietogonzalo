import React from "react";
import ItemCount from "../itemCounts/itemCounts";




function ItemListContainer({ greeting }) {

  
  const max=10;
    
  return (
    <div className="row text-center m-auto">
      <h5> {greeting} </h5>

      <ItemCount  max={max} inicial="1"/>
    </div>
  );
}

export default ItemListContainer;
