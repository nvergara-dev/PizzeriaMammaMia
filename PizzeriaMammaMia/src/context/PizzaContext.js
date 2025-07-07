import React, { createContext, useContext, useState, useEffect } from "react"

const PizzaContext = createContext()

export const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/pizzas")
        const data = await res.json()
        setPizzas(data)
      } catch (error) {
        console.error("Error cargando pizzas:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchPizzas()
  }, [])

  const getPizzaById = (id) => pizzas.find((p) => p.id === id)

  return (
    <PizzaContext.Provider value={{ pizzas, loading, getPizzaById }}>
      {children}
    </PizzaContext.Provider>
  )
}

export const usePizzas = () => useContext(PizzaContext)
