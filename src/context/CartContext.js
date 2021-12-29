import React from 'react'
import { createContext,useState } from 'react'

export const CartContext = createContext([]) ;

 function CartContextProvider({children}) {

    const [cartList, setCartList] = useState([])

  


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


      const borrarProducto = (event) => {
          const buttonRemove=event.target
          buttonRemove.closest(".producto").remove();
         
      }
      
    function borrarCarrito (){
        setCartList([])
    }

    return (
        <CartContext.Provider value={
            {cartList,
            agregarAlCarrito,
            borrarCarrito,
            borrarProducto}
            } >
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;