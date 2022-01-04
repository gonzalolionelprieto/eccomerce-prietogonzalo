import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cartList,borrarCarrito,totalCompra,borrarProducto } = useContext(CartContext);
  
  

  return (
    
    <div>
      
    {!cartList.length <= 0 ? (
      <div class="container mt-5">
      <div class="row d-flex justify-content-center ">
        <div class="row  mt-5 ">
          <div class="col d-flex justify-content-end me-5">
            {" "}
            <h5> Productos añadidos:  {cartList.length} </h5>
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
                  <div class="col-2 d-flex align-items-center">
                    <h5>Cantidad : {prod.cantidad}</h5>
                  </div>

                  <div class="col-2 d-flex align-items-center">
                    <h5>
                      ${prod.price} 
                    </h5>
                  </div>

                  <div class="col-2 d-flex align-items-center">
                    <h5 className="me-5">Subtotal ${prod.cantidad * prod.price}</h5>
                    <button type="button" className="btn btn-danger borrar col" onClick={() => borrarProducto(prod.id)}>X</button>
                     

                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className=" d-flex justify-content-end">
        <h5 className="col-3">Total: ${totalCompra()} </h5>
      </div>
      <div>
          <button class="btn btn-danger m-2" onClick={borrarCarrito}> Vaciar carrito  </button>
          <Link to="/"><button  class="btn btn-dark m-2"> Seguir comprando  </button></Link>
          
      </div>
    </div>) : ( <div className="row
    d-flex justify-content-center  inicioContainer"> <Link to="/" className="col-2 btn btn-dark mt-2 inicio">
              
              IR AL INICIO
            </Link></div> )
    }</div>
    
  );
}
