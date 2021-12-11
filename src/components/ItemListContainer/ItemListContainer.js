import React from "react";
import { useState, useEffect } from 'react';
import { mock } from "../mock/asyncMock";
import ItemList from "./itemList";




function ItemListContainer({ greeting }) {

    const [productos, setProductos] = useState([]); //se usa el hook para que persistan los datos y poder hacer cambios en el estado.
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        mock
          .then((respuesta) => setProductos(respuesta))
          .catch((err) => console.log(err))
          .finally(() => setLoading(false));
      }, []); //se usa el hook para que se cargue asincronicamente la promesa.
  
    
  return (
    <div className="row text-center m-auto">
     <h2>{greeting}</h2>
     {
      loading ? 
        <h1>Cargando...</h1>:<ItemList productos={productos}/>
      }
        
      
    </div>
  );
}

export default ItemListContainer;
