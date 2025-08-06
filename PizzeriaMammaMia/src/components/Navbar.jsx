import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { useCart } from "../context/CartContext"
import { useUser } from "../context/UserContext"

export default function Navbar() {
  const { total } = useCart()
  const { token, logout } = useUser()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <nav className="bg-dark py-3">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
        {/* Logo */}
        <Link to="/" className="navbar-brand text-white fs-4 text-decoration-none">
          🍕 Mamma Mia
        </Link>

        {/* Links */}
        <div className="d-flex flex-wrap gap-3 align-items-center">
          <Link to="/" className="text-white text-decoration-none">🏠Home</Link>
          {token ? (
            <>
              <Link to="/profile" className="text-white text-decoration-none align-self-center">
                🔓 Profile
              </Link>
              <button
                onClick={handleLogout}
                className="btn btn-link text-white text-decoration-none p-0 m-0 align-self-center"
                style={{ textDecoration: "none" }}
              >
                🔴 Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-white text-decoration-none">🔐 Login</Link>
              <Link to="/register" className="text-white text-decoration-none">📝 Register</Link>
            </>
          )}

          <Link to="/cart" className="text-white text-decoration-none">
            🛒 (${total})
          </Link>
        </div>
      </div>
    </nav>
  )
}