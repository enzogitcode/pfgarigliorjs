import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Checkout.css'

const Checkout = () => {








  
  return (
    <div>
      <div id='divFormulario'>
        <h3 id='tituloFor'>Por favor, complete el siguiente formulario para finalizar la compra</h3>
        <form id='formCheckout'>
          <label htmlFor="nombre">Nombre</label><input type="text" />
          <label htmlFor="apellido">Apellido</label><input type="text" />
          <label htmlFor="teléfono">Teléfono</label><input type="text" />
          <label htmlFor="e-mail">E-mail</label><input type="email" />
          <label htmlFor="">Confirmación de E-mail</label><input type="email" />
          <div id="divBtnForm">
            <button className='btnForm' type='reset'>Reestablecer</button>
            <button className='btnForm' type='submit'>Finalizar orden</button>
          </div>
        </form>
      </div>
    </div>
  );

}
export default Checkout
