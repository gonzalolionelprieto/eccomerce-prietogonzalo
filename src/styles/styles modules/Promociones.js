import React from 'react'

export default function Promociones() {

    

  return (
    <div className="  d-flex justify-content-center m-4" >
            <div className="row d-flex align-items-center justify-content-center ">
            <div className="col-12 col-lg-3 m-2">
                <div className="card bg-dark text-white">
                    <img src="https://www.trown.com.ar/wp-content/uploads/2020/11/respiramos-conciencia.jpg" className="card-img" alt="..."></img>
                    <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center ">
                        <h2 className="card-title">RESPIRAMOS</h2>
                        <h2 className="card-title">CONCIENCIA</h2>
                        <h2 className="card-title">PLANTAMOS </h2>
                        <h2 className="card-title">FUTURO</h2>
                        
                        
                    </div>
                </div>
            </div>
            <div className="col-12 col-lg-3 m-2">
            <div className="card bg-dark text-white">
                    <img src="https://www.trown.com.ar/wp-content/uploads/2020/11/una-gorra-un-arbol.jpg" className="card-img" alt="..."></img>
                    <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center">
                    
                         <img src="https://www.trown.com.ar/wp-content/uploads/2020/11/gorra-arbol.png" alt="..." />
                    
                        <h2 className="card-title text-center m-4">UNA GORRA UN ARBOL</h2>
                        
                        <button type="button" class="btn btn btn-outline-light btn-sm col-6 p-2">Enterate Mas</button>
                    </div>
                </div>
            </div>
        <div className="col-12 col-lg-3 m-2">
        <div className="card bg-dark text-white">
                <img src="https://www.trown.com.ar/wp-content/uploads/2020/11/arboles-plantados.jpg" className="card-img" alt="..."></img>
                <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center ">
                        
                        <h2 className="card-title">ARBOLES</h2>
                        <h2 className="card-title">PLANTADOS</h2>
                        <h2 className="h1 card-title">20534</h2>
                      
                        
                        
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}
