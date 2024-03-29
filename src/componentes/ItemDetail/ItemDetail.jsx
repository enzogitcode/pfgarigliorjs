import React from 'react';
import { useState, useContext } from 'react';
import { CarritoContexto } from '../../context/Context';
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
      <p>ID: {id}</p>
      <h3 className='itemDetailPrecio'>Precio: $ {precio} </h3>
      <p className='itemDetailStock'>Stock: {stock}</p>
      <h4 className='itemDetailDescripcionTitulo'>Descripción del producto</h4>
      <p className='itemDetailDescripcion'>{descripcion}</p>
      <img src={img} alt={nombre} />
      <div>
        {
          agregarCantidad > 0 ? (<Link to="/cart"> <button id='btnTerminarCompra'>Finalizar compra</button></Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
        }</div>
    </div>
  )
}

export default ItemDetail