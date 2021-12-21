import React from "react";
import { useState, useEffect } from 'react';
import { mock } from "../mock/asyncMock";
import ItemList from "./itemList";

import { useParams } from "react-router-dom";





function ItemListContainer({ greeting }) {

    const [productos, setProductos] = useState([]); //se usa el hook para que persistan los datos y poder hacer cambios en el estado.
    const [loading, setLoading] = useState(true);

    const {idCategoria} = useParams();

    useEffect(() => {
        
        if (idCategoria) {
          mock
          .then(respuesta => setProductos(respuesta.filter(productos => productos.categoria === idCategoria)))
          .catch((err) => console.log(err))
          .finally(() => setLoading(false));
           
        } else {
          mock
          .then((respuesta) => setProductos(respuesta))
          .catch((err) => console.log(err))
          .finally(() => setLoading(false));
        }
      
        
      }, [idCategoria]); //se usa el hook para que se cargue asincronicamente la promesa.
    
    console.log(idCategoria)  
    
  return (
    <div className="row text-center p-5 m-auto">
     <h2>{greeting}</h2>
     {
      loading ? 
        <h1>Cargando...</h1>:<ItemList productos={productos}/>
      }
        
      
    </div>
  );
}

export default ItemListContainer;
