import React, { useState } from "react";
import { pizzaCart as initialCart } from "../pizzas";
import Cart from "./Cart";

const CartList = () => {
  const [cartItems, setCartItems] = useState(
    initialCart.map((item) => ({ ...item, count: 1 })) // añade count inicial
  );

  // Actualiza la cantidad de un producto específico
  const updateCount = (id, newCount) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, count: newCount } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Calcula total general
  const totalGeneral = cartItems.reduce(
    (acc, item) => acc + item.count * item.price,
    0
  );

  return (
    <div className="container">
      <hr />
      <h2>Carrito de Compras</h2>

      {cartItems.map((item) => (
        <Cart
          nombre={item.name}
          precio={item.price}
          imagen={item.img}
          count={item.count}
          key={item.id}
          onCountChange={(newCount) => updateCount(item.id, newCount)}
          onRemove={() => removeItem(item.id)}
        />
      ))}

      <hr />
      <h3>Total general: ${totalGeneral.toLocaleString()}</h3>
      <button className="btn btn btn-dark">Pagar</button>
    </div>
  );
};

export default CartList;
