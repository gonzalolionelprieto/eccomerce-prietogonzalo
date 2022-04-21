import React from "react";
import { useState, useEffect } from 'react';

import ItemList from "./itemList";
import { collection, getFirestore, getDocs, query, where } from 'firebase/firestore'//firebase clase 12
import { useParams } from "react-router-dom";





function ItemListContainer({ greeting }) {

    const [productos, setProductos] = useState([]); //se usa el hook para que persistan los datos y poder hacer cambios en el estado.
    const [loading, setLoading] = useState(true);

   

    const {idCategoria} = useParams();

    useEffect(() => {
      const db = getFirestore()
      if(idCategoria){
        const queryCollectionCategory  = query(collection(db, 'items'), where('Categoria' ,"==", idCategoria ))
        getDocs(queryCollectionCategory )
        .then(resp => setProductos( resp.docs.map(prod => ({ id: prod.id, ...prod.data() }) ) ) )
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
      }else{
        const queryCollection = query(collection(db, 'items'))
        getDocs(queryCollection)
        .then(resp => setProductos(resp.docs.map(prod => ({ id: prod.id, ...prod.data() }) )))
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
      }
      
      

    }, [idCategoria]); //se usa el hook para que se cargue asincronicamente la promesa.
    
    console.log(idCategoria)  
    
  return (
    <div className="row text-center p-5 m-auto">
     <h2>{greeting}</h2>
     {
      loading ? 
      <div className="col d-flex justify-content-center vh-100 ">
        <div className="spinner "> </div>
      </div>
      
      :<ItemList productos={productos}/>
      }
        
      
    </div>
  );
}

export default ItemListContainer;
