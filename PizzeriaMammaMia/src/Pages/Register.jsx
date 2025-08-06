import React, { useState } from 'react'
import { useUser } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [registro, setRegistro] = useState({ email: '', pass: '',
confirmPass: '' })
  const { register } = useUser()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setRegistro({ ...registro, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { email, pass, confirmPass } = registro

    if (!email || !pass || !confirmPass) {
      alert('Todos los campos son obligatorios.')
      return
    }

    if (pass.length < 6) {
      alert('La contraseña debe tener al menos 6 caracteres.')
      return;
    }

    if (pass !== confirmPass) {
      alert('Las contraseñas no coinciden.')
      return;
    }

    try {
      await register(email, pass)
      alert('¡Registro exitoso!')
      navigate('/')
    } catch (error) {
      console.error("Error al registrar:", error)
      alert('Error al registrarse.')
    }
  }

  return (
    <div className="container d-flex justify-content-center
align-items-center" style={{ minHeight: '70vh' }}>
      <form onSubmit={handleSubmit} className="bg-light p-5 rounded
shadow w-100" style={{ maxWidth: '500px' }}>
        <h2 className="mb-4 text-center">📝 Crear una cuenta</h2>

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

        <div className="mb-3">
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

        <div className="mb-4">
          <label className="form-label">Confirmar contraseña</label>
          <input
            type="password"
            name="confirmPass"
            value={registro.confirmPass}
            onChange={handleChange}
            className="form-control"
            placeholder="••••••"
            required
          />
        </div>

        <button type="submit" className="btn btn-dark w-100">
          Registrarse
        </button>
      </form>
    </div>
  )
}

export default Register