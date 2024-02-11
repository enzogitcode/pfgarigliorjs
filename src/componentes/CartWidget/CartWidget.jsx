import React from 'react'
import './CartWidget.css'
import { Link } from 'react-router-dom'

const CartWidget = () => {
  return (
    <div>
        <Link to='/cart'><img className='imgCarrito' src="../../imgs/carritoscalonetasinfondo.png" alt="carrito" />
        </Link>
        <strong>3</strong>
    </div>
  )
}

export default CartWidget