import Reac,{ useState} from "react";
import Contador from "../itemCounts/itemCounts";
import { Link } from "react-router-dom";


const ItemDetail = ({ item }) => {
  
  const [irCarrito,setIrcarrito]=useState(false)
  const onAdd = (cantidad) => {
    console.log(cantidad);
    setIrcarrito(true);
   
};

  return (
    <div className="flex row p-4">
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

        <div className="row">
            
           {!irCarrito?(<Contador className="col-6" max={10} inicial={1} onAdd={onAdd}/>):(<Link to="/cart" className="col-6 btn btn-dark m-2"> IR AL CARRITO</Link>)}
            
        </div>
        
      </div>
    </div>
  );
};
export default ItemDetail;
