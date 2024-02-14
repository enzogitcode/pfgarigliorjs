import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import Cart from './componentes/Cart/Cart';
import Checkout from './componentes/Checkout/Checkout';
import { CarritoProvider } from './context/Context';
//import Footer from './componentes/Footer/Footer';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
            <Route path='/item/:idItem' element={<ItemDetailContainer />} />
            <Route path='/cart' element= {<Cart/>}/>
            <Route path='/Checkout' element= {<Checkout/>}/>
          </Routes>
        </CarritoProvider>
      </BrowserRouter>
    </>    
  )
}

export default App