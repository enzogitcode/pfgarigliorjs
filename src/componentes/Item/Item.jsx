import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({id, nombre, precio, img}) => {
  return (
    <div className='cardProducto'>
        <img src={img} alt={nombre} />
        <h3>Nombre: {nombre} </h3>
        <p className='prodDato'>ID: {id} </p>
        <p className='prodDato'>Precio: $ {precio} </p>
        <Link to={`/item/${id}`}className='verDetalles'> Ver Detalles </Link>
    </div>
  )
}

export default Item