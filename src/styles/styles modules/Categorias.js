import React from 'react'
import { Link } from "react-router-dom";

export default function Categorias
() {
  return (
    <div>
    <div className="col d-flex justify-content-center">
        <img className='col-6 col-lg-2 ' src="https://www.trown.com.ar/wp-content/uploads/2021/03/LOGOS-TROWN-1-600x232.png" alt="" />
    </div>
    <div className=" d-flex justify-content-center m-4" >


            <div className="row d-flex align-items-center justify-content-center ">
            
            <div className="col-12 col-lg-3 m-4">
            <div className="card bg-dark text-white border-0">
                    <img src="https://www.trown.com.ar/wp-content/uploads/2021/12/P1622359-scaled.jpg" className="card-img" alt="..."></img>
                    <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center">
                    
                        
                    
                        <h2 className="card-title text-center m-4">·TRUCKER CAP·</h2>
                        
                        <Link to="/categoria/Gorras" className=" btn btn btn-outline-light btn-sm col-6 p-2 ">Ver Mas </Link>
                        
                    </div>
                </div>
            </div>

            <div className="col-12 col-lg-3 m-4">
            <div className="card bg-dark text-white border-0">
                    <img src="https://www.trown.com.ar/wp-content/uploads/2021/12/CATEGORIA-SEMIFLAT.jpg" className="card-img" alt="..."></img>
                    <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center">
                    
                        
                    
                        <h2 className="card-title text-center m-4">·SEMI FLAT CAP·</h2>
                        
                        <Link to="/categoria/Gorras" className=" btn btn btn-outline-light btn-sm col-6 p-2 ">Ver Mas </Link>
                    </div>
                </div>
            </div>

            <div className="col-12 col-lg-3 m-4">
            <div className="card bg-dark text-white border-0">
                    <img src="https://www.trown.com.ar/wp-content/uploads/2021/08/CAT-FLAT-1.jpg" className="card-img" alt="..."></img>
                    <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center">
                    
                        
                    
                        <h2 className="card-title text-center m-4">·FLAT CAP·</h2>
                        
                       <Link to="/categoria/Gorras" className=" btn btn btn-outline-light btn-sm col-6 p-2 ">Ver Mas </Link>
                    </div>
                </div>
            </div>

            <div className="col-12 col-lg-3 m-4">
            <div className="card bg-dark text-white border-0">
                    <img src="https://www.trown.com.ar/wp-content/uploads/2021/11/Trown-30-10-21-8-scaled.jpg" className="card-img" alt="..."></img>
                    <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center">
                    
                        
                    
                        <h2 className="card-title text-center m-4">·BUZOS·</h2>
                        
                       <Link to="/categoria/Gorras" className=" btn btn btn-outline-light btn-sm col-6 p-2 ">Ver Mas </Link>
                    </div>
                </div>
            </div>

            <div className="col-12 col-lg-3 m-4">
            <div className="card bg-dark text-white border-0">
                    <img src="https://www.trown.com.ar/wp-content/uploads/2021/04/12_Cat_Pilusos-scaled.jpg" className="card-img" alt="..."></img>
                    <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center">
                    
                        
                    
                        <h2 className="card-title text-center m-4">·PILUSOS·</h2>
                        
                       <Link to="/categoria/Gorras" className=" btn btn btn-outline-light btn-sm col-6 p-2 ">Ver Mas </Link>
                    </div>
                </div>
            </div>

            <div className="col-12 col-lg-3 m-4">
            <div className="card bg-dark text-white border-0">
                    <img src="https://www.trown.com.ar/wp-content/uploads/2021/12/Trown-30-10-21-31-scaled.jpg" className="card-img" alt="..."></img>
                    <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center">
                    
                        
                    
                        <h2 className="card-title text-center m-4">·REMERAS·</h2>
                        
                       <Link to="/categoria/Remeras" className=" btn btn btn-outline-light btn-sm col-6 p-2 ">Ver Mas </Link>
                    </div>
                </div>
            </div>

            

       
        </div>
    </div>
    </div>
  )
}
