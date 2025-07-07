import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import { CartProvider } from './context/CartContext'
import { PizzaProvider } from "./context/PizzaContext"

// Importar estilos globales
import 'bootstrap/dist/css/bootstrap.min.css'        // Bootstrap
import './index.css';                                  // Tus estilos personalizados
import { App } from './app';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> 
      <CartProvider>
        <PizzaProvider>
          <App />
        </PizzaProvider>
      </CartProvider>  
    </BrowserRouter>    
  </React.StrictMode>
)
