import "./app.css"
import React, { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"

//componentes Fijos
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

//Pages de navegacion
import Home from "./Pages/Home"
import Register from './Pages/Register'
import Login from './Pages/Login'
import CartList from './components/CartList'
import Pizza from "./Pages/Pizza"
import NotFound from './components/NotFound'
import Profile from './Pages/Profile'



export function App() {
  const [producto, setProducto] = useState({})
  const getProducto = async () => {
    const res = await fetch("http://localhost:5000/api/pizzas/p001")
    const data = await res.json()
    setProducto(data);
    console.log("imprime producto : ", producto)
  };

  useEffect(() => {
    getProducto()
  }, [])

  return (
    <>
      <Navbar />
        <Routes>          
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cartlist" element={<CartList />} />
          <Route path="/pizza/001" element={
            producto?.id ? (
              <Pizza
                id={producto.id}
                nombre={producto.name}
                descripcion={producto.desc}
                precio={producto.price}
                ingredientes={producto.ingredients}
                imagen={producto.img}
              />
            ) : (
              <div className="text-center p-5">Cargando pizza...</div>
            )
          } />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer />
    </>
  )
}
