import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContexto } from '../../contexto/Contexto'

const Cart = () => {
  return (
    <div>
      <Link to={"/checkout"}>Checkout</Link> 
    </div>
  )
}

export default Cart