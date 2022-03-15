import React,{ useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import ItemDetail from './itemDetail';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

export default function ItemDetaillContainer() {
    const [item, setItem] = useState([]);
    console.log("item", item);

    const {id} = useParams()
  
    useEffect(() => {
      
      const db = getFirestore()
      const docDetail = doc(db, 'items', id)
      getDoc(docDetail)
      .then(detail => setItem({id: detail.id, ...detail.data()}))
    },[id]);
  
    return (
      <div>
        <ItemDetail item={item} />
      </div>
    );
  };
 
