import React from 'react';
import './ItemDetail.css';

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div className='contenedorItem'>
        <h2 className='itemDetailNombre'>Nombre: {nombre} </h2>
        <h3 className='itemDetailPrecio'>Precio: $ {precio} </h3>
        <p>ID: {id} </p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto ea eum in consequatur nesciunt dolores nam, fugiat eligendi ipsa esse quod voluptatem accusamus facere natus! Numquam expedita ut repellendus inventore!</p>
        <img src={img} alt={nombre} />
    </div>
  )
}

export default ItemDetail