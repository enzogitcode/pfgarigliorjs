import React, { useContext } from 'react'
import './CartWidget.css'
import { Link } from 'react-router-dom'
import { CarritoContexto } from '../../context/Context'

const CartWidget = () => {
  const { cantidadTotal } = useContext(CarritoContexto)

  return (
    <div className='divCartWidget'>
      <Link to='/cart'><img className='imgCarrito' src="../../imgs/carritoscalonetasinfondo.png" alt="carrito" />
        {cantidadTotal > 0 && <strong className='nroCantidadTotal'>{cantidadTotal}</strong>}
      </Link>
    </div>
  )
}

export default CartWidget