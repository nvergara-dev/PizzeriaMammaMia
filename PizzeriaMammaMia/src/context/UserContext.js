import React, { createContext, useContext, useState } from "react";

// Crear contexto
const UserContext = createContext()

export function useUser() {
  return useContext(UserContext)
}

const API_URL = "http://localhost:5000/api"

export function UserProvider({ children }) {
  const [token, setToken] = useState(null)
  const [email, setEmail] = useState(null)

  const login = async (emailInput, password) => {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: emailInput, password }),
    })

    if (!res.ok) throw new Error("Login fallido")
    const data = await res.json()
    setToken(data.token)
    setEmail(data.email)
  }

  const register = async (emailInput, password) => {
    const res = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: emailInput, password }),
    })

    if (!res.ok) throw new Error("Registro fallido")

    const data = await res.json()
    setToken(data.token)
    setEmail(data.email)
  }

  const logout = () => {
    setToken(null)
    setEmail(null)
  }

  const getProfile = async () => {
    if (!token) return

    const res = await fetch(`${API_URL}/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

  if (!res.ok) throw new Error("Error al obtener perfil");

  const data = await res.json()
  setEmail(data.email)
}

return (
    <UserContext.Provider value={{ token, email, login, register, logout,getProfile }}>
      {children}
    </UserContext.Provider>
  )
}