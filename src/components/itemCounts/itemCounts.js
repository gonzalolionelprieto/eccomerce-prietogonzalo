import React, { useState } from "react";



function Contador({max,inicial}) {

  const [count, setCount] = useState(inicial); //aca se le asigna un valor inicial en este caso a count de 0

  const Suma = () => {
    count < max ? setCount(prev => prev + 1):alert("compra maxima"); //  ahora se esta haciendo uso de la funcion set para decirle que sume 1 al valor 
      
      
    
  };
  const Resta = () => {
    count > inicial ?setCount(prev => prev - 1):alert("compra minima"); //  ahora se esta haciendo uso de la funcion set para decirle que reste 1 al valor 
    }
   

   const Agregar=()=>{
   console.log("agregaste "+ count +" al carrito")
   } 
  

  return (
    <div>
      <p> {count} </p>
      <button className="col-4 btn btn-outline-primary" onClick={Suma}>
        +
      </button>
      <button className="col-4 btn btn-outline-primary" onClick={Resta}>
        -
      </button>
      <br></br>
      <button className="col-8 btn btn-outline-primary" onClick={Agregar}>Agregar al carrito</button>
    </div>
  );
}

export default Contador;
