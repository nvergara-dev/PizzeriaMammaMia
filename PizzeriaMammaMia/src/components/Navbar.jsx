import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext"; // ✅ Importar el contexto de usuario

export default function Navbar() {
  const { total } = useCart();
  const { token, logout } = useUser(); // ✅ Usar token y método logout

  return (
    <nav className="bg-dark py-3">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
        <Link to="/" className="navbar-brand text-white fs-4 text-decoration-none">
          🍕 Mamma Mia
        </Link>

        <div className="d-flex flex-wrap gap-3">
          <Link to="/" className="text-white text-decoration-none">🏠 Home</Link>
          {token ? (
            <>
              <Link to="/profile" className="text-white text-decoration-none">🔓 Profile</Link>
              <button
                onClick={logout}
                className="btn btn-link text-white text-decoration-none p-0"
              >
                🔒 Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-white text-decoration-none">🔐 Login</Link>
              <Link to="/register" className="text-white text-decoration-none">📝 Register</Link>
            </>
          )}
        </div>

        <Link to="/cartlist" className="text-white fw-bold text-decoration-none">
          🛒 Total: ${total.toLocaleString()}
        </Link>
      </div>
    </nav>
  );
}
