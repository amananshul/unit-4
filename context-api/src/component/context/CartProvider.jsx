import React from 'react'
import {createContext,useState} from 'react'

export const CartContext=createContext()

const CartConsumer= CartContext.Consumer

function CartProvider({children}) {

    const [value,setValue]=useState(0);
         
  return (
   <CartContext.Provider value={{value,setValue}}>{children}</CartContext.Provider>
   
  )
}

export default CartProvider