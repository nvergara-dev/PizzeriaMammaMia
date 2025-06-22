import React from 'react';

const Pizza = (props) => {
  function primeraLetraMayuscula(cadena) {
    return cadena.charAt(0).toUpperCase() + cadena.slice(1);
  }

  const ingredientes = props.ingredientes || [];

  return (
    <div id={props.id} className="container my-4">
      <div className="card mb-3" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div className="row g-0 h-100">
          <div className="col-md-4 h-100">
            <img
              src={props.imagen}
              className="img-fluid rounded-start h-100"
              alt={props.nombre}
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="col-md-8 h-100">
            <div className="card-body d-flex flex-column justify-content-between h-100">
              <div>
                <h5 className="card-title text-capitalize">{props.nombre}</h5>
                <p className="card-text">{props.descripcion}</p>
                <ul className="ingredientes-list">
                  {ingredientes.map((item, index) => (
                    <li key={index}>🍕 {primeraLetraMayuscula(item)}</li>
                  ))}
                </ul>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <h3 className="text-primary m-0">
                  Precio: ${props.precio?.toLocaleString('es-CL') ?? '—'}
                </h3>
                <button type="button" className="btn btn-dark">
                  Añadir 🛒
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pizza
