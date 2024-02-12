import React from 'react'
import { useState, createContext } from "react";


export const carritoContexto = createContext({ total: 0, cantidadTotal: 0, carrito: [] })

export const CarritoProvider = () => {
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);
  const [cantidad, setCantidadTotal] = useState(0);
  //agregar add, remove, clear

  const agregarAlCarrito = (item, cantidad) => {
    const productoExistente = carrito.find(prod => prod.item.id === item.id);
    if (!productoExistente) {
      setCarrito(prev => [...prev, { item, cantidad }])
      setCantidadTotal(prev => [...prev + cantidad])
      setTotal(prev => [...prev + (item.precio * cantidad)])
    }
    else {}
  }
}

export default Contexto