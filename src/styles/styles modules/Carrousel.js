import React from 'react'
import "./Carrousel.css"
export default function Carrousel() {
  return (<>
  <div className="container-fluid m-0 p-0">

  
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active "  data-bs-interval="20000" data-bs-touch="true">
      
      <div className="carousel-caption    row d-flex  flex-column justify-content-center h-100 align-items-start">
          <div className="col-12 col-lg-4">
              <h1 className='  d-flex justify-content-start text-start titulo'>ENVIOS GRATIS</h1>
              <p className=' d-flex justify-content-start text-start m-3 sub-titulo'>Podes recibirlo donde quieras! Hacemos envíos a todo el país. En compras superiores a $7.999 el envío no tiene costo. Ademas 3 y 6 cuotas s/interés.</p>
              <div className="d-flex justify-content-start">
              <button type="button" class="btn btn-secondary btn-sm col-6 p-2">Ir Al Sale</button>
            </div>
          </div>
             
        
       
      </div>
    </div>
    <div className="carousel-item "  data-bs-interval="20000" data-bs-touch="true">
      
      <div className="carousel-caption   row d-flex  flex-column justify-content-center h-100  align-items-start">
          <div className="col-12 col-lg-4">
            <h1 className=' d-flex justify-content-start text-start titulo'>SALE!</h1>
            <p className=' d-flex justify-content-start text-start m-3 sub-titulo'>No te podes perder estas oportunidades que tenemos para vos.
            Aprovecha los productos que tenemos con descuento.</p>
            <div className="d-flex justify-content-start">
              <button type="button" class="btn btn-secondary btn-sm col-6 p-2">Ir Al Sale</button>
            </div>
            
          </div>
            
          
       
      </div>
    </div>
    <div className="carousel-item"  data-bs-interval="20000" data-bs-touch="true">
      
      <div className="carousel-caption    row d-flex  flex-column justify-content-center h-100 align-items-start">
        <div className=" col-12 col-lg-4 ">
           <h1 className=' d-flex justify-content-start text-start titulo'>Organic Trown</h1>
           <p className=' d-flex justify-content-start text-start m-3 sub-titulo'>Desarrollamos una nueva colección de remeras con algodón orgánico, el cual respeta los ciclos de la tierra, procurando con ello mantener un equilibrio y preservando la tierra para usos futuros.</p>
           <div className="d-flex justify-content-start">
              <button type="button" class="btn btn-secondary btn-sm col-6 p-2">Ir Al Sale</button>
            </div>
        </div>
         
        
       
      </div>
    </div>
  </div>
  
</div>
</div>
</>
  )
}
