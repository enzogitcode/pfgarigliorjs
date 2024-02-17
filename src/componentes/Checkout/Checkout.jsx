import React from 'react'
import { useState, useContext } from 'react'
import { CarritoContexto } from '../../context/Context.jsx'
import { db } from '../../services/config.js'
import './Checkout.css'
import { collection, addDoc } from 'firebase/firestore'



const Checkout = () => {
  const { carrito, vaciarCarrito, total } = useContext(CarritoContexto);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmacion, setEmailConfirmacion] = useState("");
  const [ordenId, setOrdenId] = useState("")
  const [error, setError] = useState("");



  const manejadorSubmit = (event) => {
    event.preventDefault();
    if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
      setError("*Por favor, complete todos los campos");
      return;
    }
    if (email !== emailConfirmacion) {
      setError("los emails no coinciden");
      return;
    }

    const orden = {
      items: carrito.map(producto => ({
        id: producto.item.id,
        nombre: producto.item.nombre,
        cantidad: producto.item.cantidad,
      })),
      total: total,
      fecha: new Date(),
      nombre,
      apellido,
      telefono,
      email,


    }
    addDoc(collection(db, "ordenes"), orden)
      .then(docRef => {
        setOrdenId(docRef.id);
        vaciarCarrito();
      })
      .catch(error => {
        setError(<div className='divError'><p>{error}</p></div>);
      })
  }

  return (
    <div id='divFormulario'>
      <h3>Por favor, complete el siguiente formulario para finalizar la compra</h3>
      <form id='formCheckout' onSubmit={manejadorSubmit}>

        {
          carrito.map(producto => (
            <div key={producto.item.id} >
              <p>{producto.item.nombre} x {producto.cantidad}</p>
              <p>Precio: ${producto.item.precio}</p>
              <button className='btnEliminarDelCarrito' onClick={() => eliminarDelCarrito (id)}>Eliminar del carrito</button>
            </div>
          ))
        }
        <div>
          <label htmlFor="nombre"> Nombre </label>
          <input type="text" id="nombre" onChange={(e) => setNombre(e.target.value)} />
        </div>

        <div>
          <label htmlFor="apellido"> Apellido </label>
          <input type="text" id="apellido" onChange={(e) => setApellido(e.target.value)} />
        </div>

        <div>
          <label htmlFor="telefono"> Telefono </label>
          <input type="text" id="telefono" onChange={(e) => setTelefono(e.target.value)} />
        </div>

        <div>
          <label htmlFor="email"> E-mail </label>
          <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div>
          <label htmlFor="emailcon"> Email Confirmación </label>
          <input type="email" id="emailcon" onChange={(e) => setEmailConfirmacion(e.target.value)} />
        </div>

          {error && <div className='divError'><p>{error}</p></div>}
        <div id="divBtnForm">
          <button className='btnForm' type='reset'>Reestablecer</button>
          <button className='btnForm' type='submit'>Finalizar orden</button>
          {ordenId && <div className='agradecimientoCompra'><strong>Gracias por su compra! Su número de compra es: {ordenId}</strong></div>}
        </div>
      </form >
    </div >
  );
}

export default Checkout
