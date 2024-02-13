import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContexto } from '../../context/Context'
import { useParams } from 'react-router-dom'

const Cart = () => {





  return (
    <div>

      <Link to={"/checkout"}>Checkout</Link> 
    </div>
  )
}

export default Cart