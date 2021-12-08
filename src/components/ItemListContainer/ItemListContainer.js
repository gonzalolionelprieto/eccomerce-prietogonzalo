import React from "react";
import ItemCount from "../itemCounts/itemCounts";




function ItemListContainer({ greeting }) {
  return (
    <div className="row text-center m-auto">
      <h5> {greeting} </h5>

      <ItemCount/>
    </div>
  );
}

export default ItemListContainer;
