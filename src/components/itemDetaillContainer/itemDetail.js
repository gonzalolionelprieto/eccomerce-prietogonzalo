const ItemDetail = ({ item }) => {
    console.log("El item", item);
    return (
      <div className="flex row p-4">
          <div className="col-6">
           
            <h3>{`${item.nombre} / ${item.categoria}`}</h3>
                
                <div className="col-8 m-auto p-4">

                    <img className="col-12" src={`${item.descripcion}`} alt=" "></img>  
                    <p>
                        {`${item.texto}`}
                    </p>
                </div>
            <h4> {`$ ${item.price}`} </h4>
          </div>
        
         <div className="col-6">
            <img className="col-12" src={`${item.image}`} alt={`${item.image}`}></img>
        </div>
        
      </div>
    );
  };
  export default ItemDetail;