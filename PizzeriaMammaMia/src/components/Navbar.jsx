import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const total = 25000;
  const token = false; // cambiar a true para simular usuario logueado

  return (
    <nav className="bg-dark py-3">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
        {/* Logo */}
        <Link to="/" className="navbar-brand text-white fs-4 text-decoration-none">
          🍕 Mamma Mia
        </Link>

        {/* Navegación */}
        <div className="d-flex flex-wrap gap-3">
          <Link to="/" className="text-white text-decoration-none">🏠 Home</Link>

          {token ? (
            <>
              <Link to="/profile" className="text-white text-decoration-none">🔓 Profile</Link>
              <Link to="/logout" className="text-white text-decoration-none">🔒 Logout</Link>
            </>
          ) : (
            <>
              <Link to="/login" className="text-white text-decoration-none">🔐 Login</Link>
              <Link to="/register" className="text-white text-decoration-none">📝 Register</Link>
            </>
          )}
        </div>
        <Link to="/profile" className="text-white text-decoration-none">🔓 Profile</Link>  
        {/* Carrito con link */}
        <Link to="/cartlist" className="text-white fw-bold text-decoration-none">
          🛒 Total: ${total.toLocaleString()}
        </Link>        
      </div>
    </nav>
  );
}
