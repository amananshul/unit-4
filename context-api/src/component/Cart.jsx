import React from 'react'
import {useState,createContext} from 'react'


function Cart() {
  const value= useState(CartConsumer)
  return (
    <div className="border">
        <button>Add to Cart</button>
    </div>
  )
}

export default Cart