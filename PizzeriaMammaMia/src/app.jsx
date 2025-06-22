import './app.css'
import React, { useState, useEffect } from 'react'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Pizza from './components/Pizza'

//import Register from './components/Register'
//import Login from './components/Login'

export function App() {
const [producto,setProducto] = useState({})
  const getProducto =  async () => {
    const res = await fetch('http://localhost:5000/api/pizzas/p001')
    const data = await res.json()
    setProducto(data)
    console.log("imprime producto : " , producto)
  } 

  useEffect(() =>{
    getProducto()
  },[])

  return (
    <>
      <Navbar/>
      {/*<Register />*/}  
      {/*<Login />*/}  
      <Home/>            
      {producto && producto.id && (
        <Pizza
          id={producto.id}
          nombre={producto.name}
          descripcion={producto.desc}
          precio={producto.price}
          ingredientes={producto.ingredients}
          imagen={producto.img}
        />)
      }  
      <Footer/>
    </>
  )
}
