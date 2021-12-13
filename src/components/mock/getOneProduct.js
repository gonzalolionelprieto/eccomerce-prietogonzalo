
 
    
    const oneProduct ={
        
            "id": 4,
            "nombre": 'Los Alarceles',
            "categoria":"Gorra Semi-Flat",
            "stock": 1,
            "descripcion": "https://www.trown.com.ar/wp-content/uploads/2020/11/IlustracionesWEB_OK_SemiFlat-copia-1.jpg",
            "texto":"Cumple su función a la perfección. Cómoda, de buen calce y con una banda ajustable, está diseñada para acompañarte tanto en tus viajes como en tu día a día.",
            "color": ['rojo', 'azul', 'verde'],
            "talle": 'u',
            "price": 1890,
            "image": "https://www.trown.com.ar/wp-content/uploads/2020/09/19-losalerces.jpg",
          
    }

    const getOneProduct = new Promise((resolve) => {
        setTimeout(() => {
          resolve(oneProduct);
        }, 2000);
      });
      
      

export default getOneProduct;