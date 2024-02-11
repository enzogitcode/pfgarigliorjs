import { useParams } from "react-router-dom";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import { db } from '../../services/config.js'
import { collection, getDocs, where, query } from "firebase/firestore";


const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { idCategoria } = useParams();
  useEffect(() => {
    const misProductos = idCategoria ? query(collection(db, "productitos"), where("idCat", "==", idCategoria)) : collection(db, "productitos")


    getDocs(misProductos)
      .then(respuesta => {
        const nvosProductos = respuesta.docs.map(doc => {
          const data = doc.data();
          return { id: doc.id, ...data };
        })
        setProductos(nvosProductos);
      })
      .catch(error => { console.log(error) })
  }, [idCategoria])

  return (
    <div>
      <h2> Nuestros Productos </h2>
      <div>
      <ItemList productos={productos} />
      </div>
    </div>
  )

}

export default ItemListContainer
