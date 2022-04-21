import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { addDoc, collection, documentId, getDocs, getFirestore, query, Timestamp, where, writeBatch } from "firebase/firestore";

export default function Cart() {
  const [idOrden,setIdOrden]=useState("")
  const [dataForm, setDataForm] = useState({
    name:"", email:"", phone:""
})
  const { cartList,borrarCarrito,totalCompra,borrarProducto } = useContext(CartContext);
  
  const handleChange = (e) => {

    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value
  })



  }



  // Generar orden 
  const generarOrden=async (e)=>{
    e.preventDefault()//evito el comportamiento por defecto ya que me refrescaria la pag
    let orden = {}//genero un nuevo objeto vacio
    orden.date=Timestamp.fromDate(new Date())
    orden.comprador=dataForm//formulario 
    orden.total=totalCompra();
    
    orden.item=cartList.map(cartItem=>{
      const id =cartItem.id;
      const nombre=cartItem.Nombre;
      const precio =cartItem.Price *cartItem.cantidad;
      const cantidad=cartItem.cantidad;

      return {id,nombre,precio,cantidad}
    })

    const db=getFirestore()
    const ordenColeccion=collection(db,"ordenes")
    await addDoc(ordenColeccion,orden)
    .then(resp => setIdOrden(resp.id))
    .catch(err=>console.log(err))
    .finally(()=> {
     
      borrarCarrito()
      setDataForm({
          name:"", email:"", phone:""
      })
      
    })
    console.log(idOrden)  

    const collectionStock = collection(db,`items`)

    const queryActualizarStock= query(collectionStock,where(documentId(),`in`,cartList.map(it=>it.id)))
  
  
    const batch=writeBatch(db)
  
    await getDocs(queryActualizarStock)
    .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
      Stock: res.data().Stock - cartList.find(item => item.id === res.id).cantidad
      }) 
      ))
  
      .catch(err => console.log(err))
          .finally(()=> batch.commit() )
         
    
  } 

  
  
  return (
    
    <div>
    
    {!cartList.length <= 0  ? (
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
                    <img class="img-fluid" src={prod.Image} alt="" />
                  </div>
                  <div class="col-4 d-flex flex-column justify-content-center ">
                    <div class="  align-items-center">
                      <h5 text-muted>{prod.Categoria}</h5>

                      <h4>{prod.Nombre}</h4>
                    </div>
                  </div>
                  <div class="col-2 d-flex align-items-center">
                    <h5>Cantidad : {prod.cantidad}</h5>
                  </div>

                  <div class="col-2 d-flex align-items-center">
                    <h5>
                      ${prod.Price} 
                    </h5>
                  </div>

                  <div class="col-2 d-flex align-items-center">
                    <h5 className="me-5">Subtotal ${prod.cantidad * prod.Price}</h5>
                    <button type="button" className="btn btn-danger borrar col" onClick={() => borrarProducto(prod.id)}>X</button>
                     

                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        ))}


{/* boton modal */}
<button type="button" className="btn btn-dark col-5 me-a" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Generar compra
</button>

{/* cambiar formulario por uno de bootstrap */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Terminar Compra</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body d-flex justify-content-center">
      <form 
        onSubmit={generarOrden} 
        onChange={handleChange} 
        className="d-flex flex-column justify-content-center" 
      >


          <div class="text-start mb-3 d-flex flex-column justify-content-center">
            <label   class="form-label me-3"> Nombre </label>

            <input  
                  type='text' 
                  name='name' 
                  
                  value={dataForm.name}
            />

            
          </div>

          <div class="text-start mb-3 d-flex flex-column justify-content-center">
            <label  class="form-label me-3"> Telefono </label>
            <input  type='text' 
                    name='phone'
                    
                    value={dataForm.phone}
            />
          </div>

          <div class="text-start mb-3 d-flex flex-column justify-content-center">
          <label  class="form-label me-3"> Email </label>
            <input type='email' 
                    name='email'
                    
                    value={dataForm.email}
                />
            
          </div>
          <button className="btn btn-danger m-2" data-bs-dismiss="modal">Terminar compra</button>
      </form>  
      
      </div>
     
    </div>
  </div>
</div>




      </div>
      <div className=" d-flex justify-content-end">
        <h5 className="col-3">Total: ${totalCompra()} </h5>
      </div>
      <div>
          <button class="btn btn-danger m-2" onClick={borrarCarrito}> Vaciar carrito  </button>
          <Link to="/"><button  class="btn btn-dark m-2"> Seguir comprando  </button></Link>
          
  





      </div>
    </div>) :  (
      
      <div className="container
      inicioContainer vh-100  d-flex flex-column justify-content-center"> 
      { idOrden.length !==0 ? (<div className="row d-flex flex-column justify-content-center">
      <div className=" d-flex  flex-column justify-content-center">
        <div className="col d-flex flex-column justify-content-center"> <h2 className="col text-center " >Gracias por tu compra! </h2> 
        <p className="text-center"> Por favor guarda el codigo de identificacion de tu pedido :  <span className="fs-5 text">{idOrden} </span> .En breve un asesor se estara comunicando para finalizar la compra </p></div>
       
        <Link to="/" className=" col-8 col-lg-2 p-2 btn btn-sucess mt-2 me-auto inicio ms-auto"> IR AL INICIO </Link>
      </div>
      
    </div> ) : (<div className="row d-flex flex-column justify-content-center">
      <div className=" d-flex  flex-column justify-content-center">
        <h2 className="col text-center " >Todavia no agregaste productos al carrito  Las Mejores Ofertas Te Esperan! </h2>
        <Link to="/" className=" col-8 col-lg-2 p-2 btn btn-dark mt-2 me-auto inicio ms-auto"> IR AL INICIO </Link>
      </div>
      
    </div>) }
    
    </div> )
    }</div>
    
  );
}
