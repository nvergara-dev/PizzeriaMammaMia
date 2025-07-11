import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import { CartProvider } from './context/CartContext'
import { PizzaProvider } from "./context/PizzaContext"
import { UserProvider } from './context/UserContext' 

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { App } from './app'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider> {/* ✅ Envolver toda la app con UserProvider */}
        <CartProvider>
          <PizzaProvider>
            <App />
          </PizzaProvider>
        </CartProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
)
