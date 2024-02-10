import { useState, useEffect } from "react";
import { db } from '../../services/config.js';
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [productos, setProductos] = useState (null);
const {idItem}= useParams ();


  return (
    <div>
    </div>
  )
}

export default ItemDetailContainer