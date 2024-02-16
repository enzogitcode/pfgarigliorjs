import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import { CarritoContexto } from "../../context/Context";
import { useContext } from "react";
import './Cart.css'

const Cart = () => {

    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContexto);

    if (cantidadTotal === 0) {
        return (
            <>
                <div className='divCarritoVacio'>
                    <p>El carrito esta vacío</p>
                    <p>Haz click en "Ver Productos" para seguir recorriendo nuestro App</p>
                    {/*                     <img src="" alt="carritovacio" />
 */}                    <Link to="/"><button className="verProductos">Ver Productos </button></Link>
                </div>
            </>
        )
    }
    return (
        <div className="divCarritoLleno">
            {
                carrito.map(prod => <CartItem key={prod.id} {...prod} />)
            }
            <h3> Total:$ {total}  </h3>
            <div className="divBtnsCarrito">
                <button className="btnCarrito btnVaciarCarrito" onClick={() => vaciarCarrito()}> Vaciar Carrito </button>
                <button className="btnCarrito btnFinalizarCompraCarrito"><Link to="/checkout"> Finalizar Compra </Link></button></div>
        </div>
    )
}

export default Cart