import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import db from '../../services/config.js'
import {getDocs, collection, query} from "firebase/firestore"

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  return (
    <div>
      <h2> Nuestros Productos </h2>
    </div>
    
  )
}

export default ItemListContainer