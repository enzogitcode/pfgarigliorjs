import { useParams } from "react-router-dom";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import { db } from '../../services/config.js'
import { getDocs, collection, query } from "firebase/firestore"
import { collection, getDocs, where, query } from "firebase/firestore";


const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);


  return (
    <div>
      <h2> Nuestros Productos </h2>
      <div className="container">
        {productos.map(item => (
          <div className='cardProducto'>
            <img src={img} alt={nombre} />
            <h3>Nombre: {nombre} </h3>
            <p className='prodDato'>ID: {id} </p>
            <p className='prodDato'>Precio: $ {precio} </p>
            <p className='prodDato'>Stock: {stock} </p>
            <Link to={`/item/${id}`} className='verDetalles'> Ver Detalles </Link>
          </div>
        )
        )
        }


      </div>
    </div>

  )
}

export default ItemListContainer