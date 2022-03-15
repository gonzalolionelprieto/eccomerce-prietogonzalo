//aca los items
import React from 'react'
import ItemDetailButton from '../itemDetaillContainer/itemDetailButton'

import { Link } from "react-router-dom";

export default function Item({prod}) {
    return (
        <div 

            key={prod.id}
            className='d-flex flex-column col-12 col-lg-3 '
          
            >
              
              <div className="card-body d-flex flex-column justify-content-center ">
              <Link to={`/detalle/${prod.id}`}>
                
                 <img src={prod.Image} className="col-12 card-item" alt=''/>
              </Link>
                 <div className='row'>
                     <h4>
                        {prod.Nombre}
                      </h4>
                      
                 </div>
                 <div className='row'>
                   <h5>
                   ${prod.Price}
                   </h5>
                    
                 </div>
                 
              </div>
              <div className="card-footer">
                
                 <Link to={`/detalle/${prod.id}`}>
                  <ItemDetailButton/>
                 </Link>
                
              </div>
               
            
            </div>
    )
}
