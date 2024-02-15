import React from 'react'
import { useState, useContext } from 'react'
import { CarritoContexto } from '../../context/Context.jsx'
import { db } from '../../services/config.js'
import './Checkout.css'
import { addDoc } from 'firebase/firestore'

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
      setError("completa todos los campos");
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
        console.log(error, "error al crear la compra");
        setError("no se pudo crear la orden");
      })
  }

}








return (
  <div>
    <h3 id='tituloFor'>Por favor, complete el siguiente formulario para finalizar la compra</h3>
    <div id='divFormulario'>
      <form id='formCheckout' onSubmit={manejadorSubmit}>
        {
          carrito.map(producto => (
            <div key={producto.item.id}>
              <p>{producto.item.nombre} x {producto.cantidad}</p>
              <p>{producto.item.precio} x {producto.item.precio}</p>
            </div>
          ))
        }

        <div><label htmlFor="nombre" aria-placeholder='Nombre' id='nombre' onChange={(e) => setNombre(e.target.value)}>Nombre</label><input type="text" /></div>
        <div><label htmlFor="apellido" aria-placeholder='Apellido' id='apellido' onChange={(e) => setApellido(e.target.value)}>Apellido</label><input type="text" /></div>
        <div><label htmlFor="telefono" aria-placeholder='Teléfono' id='telefono' onChange={(e) => setTelefono(e.target.value)}>Teléfono</label><input type="text" /></div>
        <div><label htmlFor="email" aria-placeholder='E-mail' id='email' onChange={(e) => setEmail(e.target.value)}>E-mail</label><input type="email" /></div>
        <div><label htmlFor="emailConf" aria-placeholder='Confirme su E-mail' id='emailConf' onChange={(e) => setEmailConfirmacion(e.target.value)}>E-mail confirmación</label><input type="email" /></div>
        <div id="divBtnForm">
          <button className='btnForm' type='reset'>Reestablecer</button>
        </div>
        {error && <p>{error}</p>}
        <button className='btnForm' type='submit'>Finalizar orden</button>
        {ordenId && <strong>Gracias por su compra! Su número de compra es: {ordenId}</strong>}
      </form >
    </div >
  </div >
);


export default Checkout
