import React from "react"
import { useParams } from "react-router-dom"
import { usePizzas } from "../context/PizzaContext"
import { useCart } from "../context/CartContext"

const Pizza = () => {
  const { id } = useParams()
  const { getPizzaById } = usePizzas()
  const { addToCart } = useCart()

  const pizza = getPizzaById(id)

  if (!pizza) return <div className="text-center p-5">Cargando pizza...</div>

  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-md-6">
          <img src={pizza.img} alt={pizza.name} className="img-fluid rounded shadow" />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-between">
          <div>
            <h2>{pizza.name}</h2>
            <p>{pizza.desc}</p>
            <h4>Ingredientes:</h4>
            <ul>
              {pizza.ingredients.map((ing, i) => (
                <li key={i}>{ing}</li>
              ))}
            </ul>
            <h3 className="fw-bold mt-4">${pizza.price.toLocaleString()}</h3>
          </div>
          <button
            className="btn btn-dark mt-3"
            onClick={() => addToCart(pizza)}
          >
            Añadir al carrito 🛒
          </button>
        </div>
      </div>
    </div>
  )
}

export default Pizza
