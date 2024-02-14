import { useState, useEffect } from "react";
import { db } from '../../services/config.js';
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import {getDoc, doc} from "firebase/firestore";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const { idItem } = useParams();
  useEffect(() => {
    const nvoDoc = doc(db, "productitos", idItem);
    getDoc(nvoDoc)
      .then (respuesta => {
        const data = respuesta.data();
        const nvoProducto = { ...respuesta.data(), id: doc.id};
        setProducto(nvoProducto);
      })
      .catch (error => console.log ("cualquiera", error))

  }, [idItem])


//TENGO QUE QUITAR LOS CONSOLE.LOG DE LAS FUNCIONES


  return (
    <div>
              <ItemDetail {...producto} />
    </div>
  )
}

export default ItemDetailContainer