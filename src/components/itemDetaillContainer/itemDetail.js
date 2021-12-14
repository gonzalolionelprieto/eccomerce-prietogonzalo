const ItemDetail = ({ item }) => {
  console.log("El item", item);
  return (
    <div className="flex row p-4">
      <div className="col-12 col-md-6">
        <img
          className="col-12"
          src={`${item.image}`}
          alt={`${item.image}`}
        ></img>
      </div>
      <div className="col-12 col-md-6">
        <h1>{`${item.nombre} / ${item.categoria}`}</h1>

        <div className="col-12 col-md-10 m-auto p-2">
          <img className="col-12" src={`${item.descripcion}`} alt=" "></img>
          <p>{`${item.texto}`}</p>
        </div>

        <div className="row">
            
            <h4 className="col-6"> {`$ ${item.price}`} </h4>
            <button className="btn btn-dark col-6">
                COMPRAR
            </button>
        </div>
        
      </div>
    </div>
  );
};
export default ItemDetail;
