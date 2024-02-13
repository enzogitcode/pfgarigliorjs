import React from 'react';
import { useState, useContext} from 'react';
import { CarritoContexto } from '../../contexto/Contexto';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import './ItemDetail.css';

const ItemDetail = ({ id, nombre, stock, precio, img, descripcion }) => {
   const [agregarCantidad, setAgregarCantidad] = useState(0);

  const { agregarAlCarrito } = useContext(CarritoContexto);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    const item = { id, nombre, precio };
    agregarAlCarrito(item, cantidad);
  } 

  return (
    <div className='contenedorItem'>
      <h2 className='itemDetailNombre'>Nombre: {nombre} </h2>
      <h3 className='itemDetailPrecio'>Precio: $ {precio} </h3>
      <p>Stock: {stock}</p>
      <h4>Descripción del producto</h4>
      <p>{descripcion}</p>
      <img src={img} alt={nombre} />
       {
        agregarCantidad > 0 ? (<Link to="/Cart"> Terminar compra</Link>) : (<ItemCount incial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
      } 
    </div>
  )
}

export default ItemDetail