import React, { createContext, useState, useContext } from "react"

// 1. Crear el contexto
const CartContext = createContext()

// 2. Crear el provider
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])

  // Agrega un producto al carrito
  const addToCart = (item) => {
    setCartItems((prev) => {
      const existing = prev.find((p) => p.id === item.id)
      if (existing) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, count: p.count + 1 } : p
        )
      } else {
        return [...prev, { ...item, count: 1 }]
      }
    })
  }

  // Cambiar cantidad
  const updateCount = (id, newCount) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, count: newCount } : item))
    )
  }

  // Eliminar producto
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  // Calcular total
  const total = cartItems.reduce((acc, item) => acc + item.price * item.count, 0)

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, updateCount, removeFromCart, total }}
    >
      {children}
    </CartContext.Provider>
  )
}

// 3. Hook personalizado
export const useCart = () => useContext(CartContext)
