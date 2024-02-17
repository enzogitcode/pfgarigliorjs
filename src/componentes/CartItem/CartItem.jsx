import './CartItem.css'

const CartItem = ({ item, cantidad, eliminarProducto }) => {

  return (
    <>
      {/* <h3> {item.nombre}  </h3>
        <p> Cantidad: {cantidad} </p>
        <p> Precio: {item.precio} </p>
        <p> Precio final: {item.precio * cantidad} */}

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