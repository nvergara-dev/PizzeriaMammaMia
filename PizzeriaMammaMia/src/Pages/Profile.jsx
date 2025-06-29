import React from 'react';

const Profile = () => {
  const email = 'usuario@ejemplo.com';

  const handleLogout = () => {
    alert('Sesión cerrada (aún no implementado)');
    // Aquí luego iría la lógica real: borrar tokens, redirigir, etc.
  };

  return (
    <div className="container py-5 text-center">
      <h2 className="mb-4">👤 Perfil de Usuario</h2>
      <p className="lead">Correo electrónico: <strong>{email}</strong></p>
      <button className="btn btn-danger mt-3" onClick={handleLogout}>
        Cerrar sesión 🔒
      </button>
    </div>
  );
};

export default Profile;
