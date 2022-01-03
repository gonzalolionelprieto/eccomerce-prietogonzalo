//aca la lista de itemm
import React, { memo } from "react";
import Item from "./item";

const ItemList = memo(({ productos }) => {
  return (
    <div className="container-fluid">
      <div className="row">
            {productos.map((prod) => (
            <Item prod={prod} />
            ))}
      </div>
    </div>
  );
});

export default ItemList;
