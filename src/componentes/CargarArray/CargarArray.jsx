import { useEffect } from "react";
import { db } from "../../service/config.js";
import { collection, doc, setDoc } from "firebase/firestore";

const CargarArray = () => {

    useEffect(() => {
        const cargarData = async () => {
            try {
                const productitos = [                ]

                const productosCollection = collection(db, "productitos");

                productitos.forEach(async (producto) => {
                    const productoDoc = doc(productosCollection, producto.id.toString());
                    await setDoc(productoDoc, producto);
                })
            } catch (error) {
                console.log(error => console.log("nos vamos a re morir ahh", error))
            }
        }

        cargarData();

    }, [])


    return (
        <div>CargarArray</div>
    )
}

//export default CargarArray