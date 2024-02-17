import './CartItem.css'

const CartItem = ({ item, cantidad, eliminarProducto }) => {

  return (
    <>
      <div className='cardItemContainer'>
        <div class="textoCompra">
          <div class="descripcionCompra">
            <p> {item.nombre} </p>
            <p> Cantidad: {cantidad} </p>
            <p> Precio unitario: {item.precio} </p>
            <p className='precioFinal'> Precio final: {item.precio * cantidad}</p>
          </div>

          <button onClick={() => eliminarProducto (item.id)} class="btnEliminarDelCarrito">Eliminar del carrito</button>
        </div>
      </div>
    </>
  )
}

export default CartItem