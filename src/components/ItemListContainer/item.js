//aca los items
import React from 'react'
import ItemDetailButton from '../itemDetaillContainer/itemDetailButton'

import { Link } from "react-router-dom";

export default function Item({prod}) {
    return (
        <div 

            key={prod.id}
            className='col-md-3 p-3 '
            >
              <div className="card-header">
                <h5 className='text-uppercase'>
                   {`-  ${prod.categoria}  -`}
                </h5>
               
              </div>
              <div className="card-body">
                 <img src={prod.image} className="col-12" alt=''/>
                 <div className='row'>
                     <h4>
                        {prod.nombre}
                      </h4>
                      <hr></hr> 
                 </div>
                 <div className='row'>
                   <h5>
                   ${prod.price}
                   </h5>
                    
                 </div>
                 
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
