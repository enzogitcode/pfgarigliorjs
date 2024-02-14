import React from 'react'
//import Button from 'react-bootstrap/Button';
//import Form from 'react-bootstrap/Form';
import './Checkout.css'

const Checkout = () => {

  return (
    <div id='divCheckout'>
      <form id='formCheckout'>
<input type="text" /><label htmlFor=""></label>    
<input type="text" /><label htmlFor=""></label>    
<input type="email" /><label htmlFor="">e-mail</label>    
<input type="email" /><label htmlFor="">confirmación e-mail</label>    
<input type="text" /><label htmlFor=""></label>
<button type='reset'>Reestablecer</button>
<button type='submit'>Aceptar</button>   
      </form>
    </div>
  )
 



/* 
  return (
    <div id='divFormulario'>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="email" placeholder="Ingrese su email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Apellido</Form.Label>
          <Form.Control type="text" placeholder="Ingrese su Apellido" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control type="rext" placeholder="Ingrese su número de teléfono" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>E-mail</Form.Label>
          <Form.Control type="email" placeholder="Ingrese su email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Por favor, confirme su E-mail</Form.Label>
          <Form.Control type="email" placeholder="Ingrese su email" />
        </Form.Group>
        <Form.Group id='btnCheckoutContainer'>
          <Button variant="primary" type="reset">
            Reestablecer
          </Button>
          <Button variant="primary" type="submit">
            Confirmar
          </Button></Form.Group>
      </Form>
    </div>

  ); */

}
export default Checkout
