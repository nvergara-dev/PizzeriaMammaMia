import React, { useEffect } from 'react'
import { useUser } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const { email, token, getProfile, logout } = useUser()
  const navigate = useNavigate()

  useEffect(() => {
    if (token) {
      getProfile().catch(() => {
        alert('Error al cargar el perfil')
        logout()
        navigate('/login')
      })
    } else {
      navigate('/login')
    }
  }, [token])

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <div className="container py-5 text-center">
      <h2 className="mb-4">👤 Perfil de Usuario</h2>
      <p className="lead">Correo electrónico: <strong>{email}</strong></p>
      <button className="btn btn-danger mt-3" onClick={handleLogout}>
        Cerrar sesión 🔒
      </button>
    </div>
  )
}

export default Profile