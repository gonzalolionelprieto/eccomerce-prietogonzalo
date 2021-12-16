//aca los items
import React from 'react'
import ItemDetailButton from '../itemDetaillContainer/itemDetailButton'

import { Link } from "react-router-dom";

export default function Item({prod}) {
    return (
        <div 

            key={prod.id}
            className='col-md-4 '
            >
              <div className="card-header">
                {`${prod.nombre}-${prod.categoria}`}
              </div>
              <div className="card-body">
                 <img src={prod.image} className="col-12"/>
                {prod.price}$
              </div>
              <div className="card-footer">
                <Link to={`/detalle/${prod.id}`}>
                <ItemDetailButton/>
                </Link>
                 
                
              </div>
                <br></br>
            
            </div>
    )
}
