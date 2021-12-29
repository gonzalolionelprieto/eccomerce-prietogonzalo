import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cartList,borrarCarrito,borrarProducto } = useContext(CartContext);


  return (
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="row  ">
          <div class="col d-flex justify-content-end me-5">
            {" "}
            <h5> Productos añadidos: </h5>{" "}
          </div>
        </div>

        {cartList.map((prod) => (
          <div class="card">
            <div class="col-md-10 m-a">
              <div class="row border-top border-bottom">
                <div class="row col-12 d-flex justify-content-center producto">
                  <div class="col-2">
                    <img class="img-fluid" src={prod.image} alt="" />
                  </div>
                  <div class="col-4 d-flex flex-column justify-content-center ">
                    <div class="  align-items-center">
                      <h5 text-muted>{prod.categoria}</h5>

                      <h4>{prod.nombre}</h4>
                    </div>
                  </div>
                  <div class="col-4 d-flex align-items-center">
                    <h4>cantidad {prod.cantidad}</h4>
                  </div>

                  <div class="col-2 d-flex align-items-center">
                    <h5>
                      ${prod.price} <button class="btn btn-dark borrar" onClick={borrarProducto}> X </button>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
          <button class="btn btn-dark m-2" onClick={borrarCarrito}> vaciar carrito  </button>
      </div>
    </div>
  );
}
