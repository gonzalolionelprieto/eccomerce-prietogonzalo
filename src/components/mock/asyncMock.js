

    const mercaderia = [
        {
          "id": 1,
          "nombre": 'Gorra trucker',
          "categoria":"Trown Inc",
          "stock": 1,
          "color": ['rojo', 'azul', 'verde'],
          "talle": 'u',
          "price": 2000,
          "image": "https://www.trown.com.ar/wp-content/uploads/2020/09/47-trowninc-1.jpg",
        },
        {
            "id": 2,
            "nombre": 'Gorra trucker',
            "categoria":"Pine Tree",
            "stock": 1,
            "color": ['rojo', 'azul', 'verde'],
            "talle": 'u',
            "price": 1555,
            "image": "https://www.trown.com.ar/wp-content/uploads/2020/11/36-pinetree.jpg",
          },
          {
            "id": 3,
            "nombre": 'Gorra trucker',
            "categoria":"Ice",
            "stock": 1,
            "color": ['rojo', 'azul', 'verde'],
            "talle": 'u',
            "price": 1665,
            "image": "https://www.trown.com.ar/wp-content/uploads/2019/05/27-ice.jpg",
          },
          {
            "id": 4,
            "nombre": 'Gorra Semi-Flat',
            "categoria":"Los Alerces",
            "stock": 1,
            "color": ['rojo', 'azul', 'verde'],
            "talle": 'u',
            "price": 1890,
            "image": "https://www.trown.com.ar/wp-content/uploads/2020/09/19-losalerces.jpg",
          },
          {
            "id": 5,
            "nombre": 'Gorra Semi-Flat',
            "categoria":"B. Circle",
            "stock": 1,
            "color": ['rojo', 'azul', 'verde'],
            "talle": 'u',
            "price": 1200,
            "image": "https://www.trown.com.ar/wp-content/uploads/2020/11/9-b.circle1.jpg",
          },
          {
            "id": 6,
            "nombre": 'Gorra Semi-Flat',
            "categoria":"Mountain",
            "stock": 1,
            "color": ['rojo', 'azul', 'verde'],
            "talle": 'u',
            "price": 1700,
            "image": "https://www.trown.com.ar/wp-content/uploads/2020/11/I0A9895.jpg",
          },
        
      ];
   

     export  const mock = new Promise((resolve) => {
        setTimeout(() => {
          resolve(mercaderia);
        }, 2000);
      }); 


