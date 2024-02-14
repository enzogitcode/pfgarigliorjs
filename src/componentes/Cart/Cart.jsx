/* import { useState } from 'react'
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

export default Cart */

import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import { CarritoContexto } from "../../context/Context";
import { useContext } from "react";

const Cart = () => {
  
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContexto);

    if (cantidadTotal === 0) {
        return (
            <>
                <h2>No hay productos en el carrito</h2>
                <Link to="/"> Ver Productos </Link>
            </>
        )
    }
    return (
        <div>
            {
                carrito.map(prod => <CartItem key={prod.id} {...prod} />)
            }
            <h3> Total:$ {total}  </h3>
            <button onClick={()=> vaciarCarrito()}> Vaciar Carrito </button>
            <Link to="/checkout"> Finalizar Compra </Link>
        </div>
    )
}

export default Cart