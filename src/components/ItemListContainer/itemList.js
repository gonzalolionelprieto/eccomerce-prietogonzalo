//aca la lista de itemm
import React from 'react'
import Item from './item'

export default function ItemList({productos}) {
    return (
        <div className="row">
            {


                 

            productos.map((prod) => <Item prod={prod} /> )
            


            }
           
        </div>
    )
}
