import React,{ useState, useEffect } from 'react';
import getOneProduct from "../mock/getOneProduct";
import { mock } from "../mock/asyncMock";
import { useParams } from "react-router-dom";
import ItemDetail from './itemDetail';

export default function ItemDetaillContainer() {
    const [item, setItem] = useState([]);
    console.log("item", item);

    const {id} = useParams()
  
    useEffect(() => {
      //getOneProduct.then((res) => setItem(res)).catch((err) => console.log(err));
      mock
      .then(res => setItem(res.find(item => item.id === parseInt(id)))) 
    });
  
    return (
      <div>
        <ItemDetail item={item} />
      </div>
    );
  };
 
