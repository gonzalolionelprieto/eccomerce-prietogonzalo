import React from 'react'
import { createContext,useState } from 'react'

export const CartContext = createContext([]) ;

 function CartContextProvider({children}) {

    const [cartList, setCartList] = useState([])

  

  // Agregar  item del carrito
    function agregarAlCarrito(item) {       

        const index = cartList.findIndex(i => i.id === item.id)
  
          if (index > -1) {
            const anterior= cartList[index].cantidad
  
            cartList.splice(index, 1)

            setCartList([...cartList, { ...item, cantidad: item.cantidad + anterior}])

          } else {
            setCartList([...cartList, item])
          }
      }

      // Borra item del carrito
      const borrarProducto = (item) => {
      setCartList(cartList.filter(prod => prod.id !== item))
      }

      // Subtotal item del carrito
      const subtotalCompra = () => {
        return ( 
            cartList.reduce((prev, prod) => (prev + prod.cantidad * prod.price), 0)
        )
      }

      // Total item del carrito
      const totalCompra = () => {
        return( 
            cartList.reduce(prod => (subtotalCompra(prod)), 0)
        )
    }
     
     // Vaciar carrito 
      function borrarCarrito (){
        setCartList([])
       }

    return (
        <CartContext.Provider value={
            {cartList,
            agregarAlCarrito,
            borrarCarrito,
            subtotalCompra,
            totalCompra,
            borrarProducto}
            } >
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;