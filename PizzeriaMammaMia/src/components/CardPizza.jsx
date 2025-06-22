import React from 'react'

const CardPizza = (props) => {
  function primeraLetraMayuscula(cadena) {
    return cadena.charAt(0).toUpperCase() + cadena.slice(1)
  } 
  return (
    <article className='col-12 col-sm-6 col-md-4 mb-4' id={props.id}>
      <div className='card h-100 shadow-sm border-0'>
        <img src={props.imagen} class="card-img-top" alt="imagen de pizza"/>
        <div className="card-body">
          <h5 className="card-title">{primeraLetraMayuscula(props.nombre)}</h5>
        </div>
        <div className="list-group list-group-flush d-flex justify-content-center align-items-center">
          <h6>Ingredientes:</h6>
          <ul className="ingredientes-list">{
          props.ingredientes.map((item) => (
              <li>{primeraLetraMayuscula(item)}</li>
          ))         }
          </ul>
        </div>
        <div className="list-group list-group-flush d-flex justify-content-center align-items-center">
          <h3>Precio:${props.precio.toLocaleString()}</h3>
          <div className="d-flex justify-content-between align-items-center m-0">
            <button type="button" className="btn btn-outline-dark m-4">Ver Mas 👀</button>
            <button type="button" className="btn btn-dark m-4">Añadir🛒</button>
          </div>        
        </div>
      </div>
    </article>
  )
}

export default CardPizza