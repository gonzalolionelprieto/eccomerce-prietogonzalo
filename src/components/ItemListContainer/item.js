//aca los items
import React from 'react'
import Contador from '../itemCounts/itemCounts'

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
                 <Contador max={10} inicial={1}/> 
                
              </div>
                <br></br>
            
            </div>
    )
}
