import { useEffect, useState } from "react"
import CardPizza from "../components/CardPizza"
import Header from "../components/Header"

const Home = () => {
  const [pizzas, setPizzas] = useState([])
  const getPizzas = async () => {
    const res = await fetch("http://localhost:5000/api/pizzas")
    const data = await res.json()
    console.log(data)
    setPizzas(Array.isArray(data) ? data : data.pizzas || [])
  };

  useEffect(() => {
    getPizzas()
  }, [])
  return (
    <div>
      <Header />
      <div className="row m-3">
        {pizzas.map((pizza) => (
          <CardPizza
            id={pizza.id}
            nombre={pizza.name}
            precio={pizza.price}
            ingredientes={pizza.ingredients}
            imagen={pizza.img}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
