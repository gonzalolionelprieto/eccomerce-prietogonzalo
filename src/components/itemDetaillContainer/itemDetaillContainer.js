import React,{ useState, useEffect } from 'react';
import getOneProduct from "../mock/getOneProduct";
import ItemDetail from './itemDetail';

export default function ItemDetaillContainer() {
    const [item, setItem] = useState([]);
    console.log("item", item);
  
    useEffect(() => {
      getOneProduct.then((res) => setItem(res)).catch((err) => console.log(err));
    });
  
    return (
      <div>
        <ItemDetail item={item} />
      </div>
    );
  };
 
