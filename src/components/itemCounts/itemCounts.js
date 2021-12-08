import React,{useState} from "react";

const ItemCount =({ max,inicial })=>{

    const [value,setValue]=useState(inicial)

    const Suma =()=>{
        value > inicial ? setValue(value + 1):alert("compra maxima")
    }

    const Resta =()=>{
        value > inicial ? setValue(value - 1):alert("compra minima")
    }

    return(

        <div>
            <h1>
                {value}
            </h1>
            <button onClick={Suma} >+</button>
            <button onClick={Resta}>-</button>
            <button onClick>Reset</button>
        </div>

    )

}
export default ItemCount;