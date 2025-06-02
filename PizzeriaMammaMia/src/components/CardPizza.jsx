import React from 'react';

const CardPizza = (props) => {
  return (
    <div>
      <div class="card" style="width: 25rem;">
      <img src={props.imagen} class="card-img-top" alt="imagen de pizza"/>
      <div class="card-body">
        <h5 class="card-title">{props.nombre}</h5>
      </div>
      <div class="list-group list-group-flush d-flex justify-content-center align-items-center">
        <h6>Ingredientes:</h6>
         <p>{props.ingredientes.join(',')}</p>
      </div>
      <div class="list-group list-group-flush d-flex justify-content-center align-items-center">
        <h3>Precio:${props.precio.toLocaleString()}</h3>
        <div class="d-flex justify-content-between align-items-center m-0">
          <button type="button" class="btn btn-outline-dark m-4">Ver Mas 👀</button>
          <button type="button" class="btn btn-dark m-4">Añadir🛒</button>
        </div>        
      </div>
    </div>
    </div>
  );
}

export default CardPizza;
