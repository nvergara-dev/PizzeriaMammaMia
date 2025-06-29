import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 p-6">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Página no encontrada</h2>
        <p className="text-gray-600 mb-6">
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
        </p>
        <Link to="/" className="btn btn-primary btn-lg" aria-label="Volver al inicio">
            <span className="bi bi-arrow-left" aria-hidden="true"></span>{' '}
            <span>Volver al inicio</span>
        </Link>
      </div>
    </div>
  )
}
