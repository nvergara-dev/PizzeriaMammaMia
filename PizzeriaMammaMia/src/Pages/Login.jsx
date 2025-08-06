import React, { useState } from 'react'
import { useUser } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [registro, setRegistro] = useState({ email: '', pass: '' })
  const { login } = useUser()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setRegistro({ ...registro, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { email, pass } = registro

    if (!email.trim() || !pass.trim()) {
      alert('Debes completar todos los campos.')
      return
    }

    if (pass.length < 6) {
      alert('La contraseña debe tener al menos 6 caracteres.')
      return
    }

    try {
      await login(email, pass)
      alert('¡Login exitoso!')
      navigate('/')
    } catch (error) {
      console.error("Error al hacer login:", error)
      alert('Error al iniciar sesión.')
    }
  }

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '70vh' }}>
      <form onSubmit={handleSubmit} className="bg-light p-5 rounded shadow w-100" style={{ maxWidth: '500px' }}>
        <h2 className="mb-4 text-center">🔐 Iniciar sesión</h2>
        <div className="mb-3">
          <label className="form-label">Correo electrónico</label>
          <input
            type="email"
            name="email"
            value={registro.email}
            onChange={handleChange}
            className="form-control"
            placeholder="ejemplo@correo.com"
            required
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            name="pass"
            value={registro.pass}
            onChange={handleChange}
            className="form-control"
            placeholder="••••••"
            required
          />
        </div>

        <button type="submit" className="btn btn-dark w-100">
          Ingresar
        </button>
      </form>
    </div>
  )
}

export default Login