import React, { useState } from "react";

function Contador({ max, inicial }) {
  const [count, setCount] = useState(inicial); //aca se le asigna un valor inicial en este caso a count de 0

  const Suma = () => {
    count < max ? setCount((prev) => prev + 1) : alert("compra maxima"); //  ahora se esta haciendo uso de la funcion set para decirle que sume 1 al valor
  };
  const Resta = () => {
    count > inicial ? setCount((prev) => prev - 1) : alert("compra minima"); //  ahora se esta haciendo uso de la funcion set para decirle que reste 1 al valor
  };

  const Agregar = () => {
    console.log("agregaste " + count + " al carrito");
  };

  return (
    <div className="row d-flex justify-content-center m-0">
      
      <div className="row d-flex justify-content-center">
        <button className="col-2 btn btn-dark m-2" onClick={Suma}>
          +
        </button>
        <h4 className="col-2 text-center "> {count} </h4>
        <button className="col-2 btn btn-dark m-2" onClick={Resta}>
          -
        </button>
      </div>

      <br></br>
      <button className="col-6 btn btn-dark m-2" onClick={Agregar}>
        Añadir al carrito
      </button>
    </div>
  );
}

export default Contador;
