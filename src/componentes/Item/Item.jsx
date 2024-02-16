import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ id, nombre, stock, precio, img }) => {



  return (
    <div className='cardProducto'>
      <img src={img} alt={nombre} />
      <h3 className='cardNombre'>Nombre: {nombre} </h3>
      <p className='prodDato'>ID: {id} </p>
      <p className='prodDato'>Precio: $ {precio} </p>
      <p className='prodDato'>Stock: {stock} </p>
      <button className='verDetalles'  ><Link to={`/item/${id}`} > Ver Detalles </Link></button>
    </div>
  )
}

export default Item