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
            <button onClick={() => vaciarCarrito()}> Vaciar Carrito </button>
            <button><Link to="/checkout"> Finalizar Compra </Link></button>
        </div>
    )
}

export default Cart