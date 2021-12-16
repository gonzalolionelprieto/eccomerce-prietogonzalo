import Contador from "../itemCounts/itemCounts";

const ItemDetail = ({ item }) => {
  console.log("El item", item);
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
            
           
            <Contador className="col-6" max={10} inicial={1}/>
        </div>
        
      </div>
    </div>
  );
};
export default ItemDetail;
