import React from 'react';
import './ItemDetail.css';

const ItemDetail = ({nombre, stock, precio, img}) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const {agregarAlCarrito} = useContext(CarritoContext);

  const manejadorCantidad =  (cantidad) => {
    setAgregarCantidad(cantidad);

    const item = {id, nombre, precio};
    agregarAlCarrito(item, cantidad);
  }

  return (
    <div className='contenedorItem'>
        <h2 className='itemDetailNombre'>Nombre: {nombre} </h2>
        <h3 className='itemDetailPrecio'>Precio: $ {precio} </h3>
        <p>Stock: {stock}</p>
        <h4>Descripción del producto</h4>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto ea eum in consequatur nesciunt dolores nam, fugiat eligendi ipsa esse quod voluptatem accusamus facere natus! Numquam expedita ut repellendus inventore!</p>
        <img src={img} alt={nombre} />
        {
        agregarCantidad > 0 ? (<Link to="/cart"> Terminar compra</Link>) : (<ItemCount incial = {1} stock = {stock} funcionAgregar = {manejadorCantidad} />)
      }
    </div>
  )
}

export default ItemDetail