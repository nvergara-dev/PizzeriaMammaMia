import React, { useState } from "react"
import { useCart } from "../context/CartContext"
import { useUser } from "../context/UserContext"
import Cart from "../Pages/Cart"

const CartList = () => {
  const { cartItems, updateCount, removeFromCart, total } = useCart()
  const { token } = useUser()
  const [mensaje, setMensaje] = useState("")

  const handleCheckout = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ cart: cartItems }),
      })

      if (!res.ok) throw new Error("Error en el checkout")

      setMensaje("✅ Compra realizada con éxito")
    } catch (error) {
      console.error("error al enviar checkout : ", error)
      setMensaje("❌ Hubo un error al procesar la compra")
    }
  }

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

      <button
        className="btn btn-dark"
        disabled={!token}
        onClick={handleCheckout}
      >
        Pagar
      </button>

      {!token && (
        <p className="text-danger mt-2">
          Debes iniciar sesión para continuar con el pago.
        </p>
      )}

      {mensaje && (
        <div className="alert alert-info mt-3" role="alert">
          {mensaje}
        </div>
      )}
    </div>
  )
}

export default CartList