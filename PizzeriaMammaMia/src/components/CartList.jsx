import React from "react"
import { useCart } from "../context/CartContext"
import Cart from "../Pages/Cart"

const CartList = () => {
  const { cartItems, updateCount, removeFromCart, total } = useCart()

  return (
    <div className="container">
      <hr />
      <h2>Carrito de Compras</h2>

      {cartItems.map((item) => (
        <Cart
          key={item.id}
          nombre={item.name}
          precio={item.price}
          imagen={item.img}
          count={item.count}
          onCountChange={(newCount) => updateCount(item.id, newCount)}
          onRemove={() => removeFromCart(item.id)}
        />
      ))}

      <hr />
      <h3>Total general: ${total.toLocaleString()}</h3>
      <button className="btn btn-dark">Pagar</button>
    </div>
  )
}

export default CartList
