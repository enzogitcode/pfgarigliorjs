import './ItemCount.css'
import { useState } from "react";

const ItemCount = ({ stock, inicial, funcionAgregar}) => {

    const [contador, setContador] = useState(1);


    const incrementar = () => {
      if(contador < stock) {
        setContador(contador + 1);
      }
    }

    const decrementar = () => {
      if(contador > inicial) {
        setContador(contador - 1);
      }
    }


  return (
    <>
    <div className='contadorCss'>
        <button className='btnContador btnContadorRestar' onClick={decrementar}> - </button>
        <p className='btnContador nroContador'> {contador} </p>
        <button className='btnContador btnContadorSumar' onClick={incrementar}> + </button>
    </div>
      <button className='btnAgregarCarrito' onClick={() => funcionAgregar (contador)}> Agregar al Carrito </button>
    </>
  )
}

export default ItemCount