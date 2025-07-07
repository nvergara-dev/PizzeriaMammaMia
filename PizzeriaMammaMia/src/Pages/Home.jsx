import React from "react"
import { usePizzas } from "../context/PizzaContext"
import CardPizza from "../components/CardPizza"

const Home = () => {
  const { pizzas, loading } = usePizzas()

  if (loading) return <div className="text-center p-5">Cargando pizzas...</div>

  return (
    <div className="container py-4">
      <h2 className="mb-4">Nuestras Pizzas</h2>
      <div className="row">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            id={pizza.id}
            nombre={pizza.name}
            imagen={pizza.img}
            precio={pizza.price}
            ingredientes={pizza.ingredients}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
