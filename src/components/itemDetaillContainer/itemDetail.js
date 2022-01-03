import React, { useState, useContext } from "react";
import Contador from "../itemCounts/itemCounts";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ item }) => {
  const { cartList, agregarAlCarrito } = useContext(CartContext);

  const [irCarrito, setIrcarrito] = useState(false);

  
  const onAdd = (cantidad) => {
  
  
    agregarAlCarrito({ ...item, cantidad: cantidad });
    setIrcarrito(true);
  };
  console.log(cartList.length
    );
  return (
    <div className="flex row p-4 mt-5">
      <div className="col-12 col-md-6  d-flex align-items-center">
        <img
          className="col-12"
          src={`${item.image}`}
          alt={`${item.image}`}
        ></img>
      </div>
      <div className="col-12 col-md-6">
        <h1>{`${item.nombre} / $ ${item.price}`}</h1>

        <div className="col-12 col-md-10 m-auto p-2">
          <img className="col-12 p-3" src={`${item.descripcion}`} alt=" "></img>
          <h5 className="m-3">{`${item.texto}`}</h5>
        </div>

        <div className="row d-flex justify-content-center">
          {!irCarrito ? (
            <Contador className="col-6" max={10} inicial={1} onAdd={onAdd} />
          ) : (
            <Link to="/cart" className="col-6 btn btn-dark mt-2">
              {" "}
              IR AL CARRITO
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
export default ItemDetail;
