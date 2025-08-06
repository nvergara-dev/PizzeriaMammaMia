import "./app.css"
import React from "react"
import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./Pages/Home"
import Register from "./Pages/Register"
import Login from "./Pages/Login"
import CartList from "./components/CartList"
import Pizza from "./Pages/Pizza"
import NotFound from "./components/NotFound"
import Profile from "./Pages/Profile"

import ProtectedRoute  from "./components/ProtectedRoute"
import PublicOnlyRoute from "./components/PublicOnlyRoute"

export function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/register"
          element={
            <PublicOnlyRoute>
              <Register />
            </PublicOnlyRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicOnlyRoute>
              <Login />
            </PublicOnlyRoute>
          }
        />
        <Route path="/cart" element={<CartList />} />
        <Route path="/pizza/:id" element={<Pizza />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}