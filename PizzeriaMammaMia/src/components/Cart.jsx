import React from 'react'

const Cart = (props) => {
  const { nombre, precio, imagen, count, onCountChange , onRemove} = props

  function primeraLetraMayuscula(cadena) {
    return cadena.charAt(0).toUpperCase() + cadena.slice(1)
  } 

  const handleIncrement = () => {
    onCountChange(count + 1)
  }

  const handleDecrement = () => {
     if (count > 1) {
        onCountChange(count - 1)
     } else {
        onRemove()  
     }
  }

  const total = count * precio

  return (
    <div className="card mb-3 p-3">
      <div className="row main align-items-center">
        <div className="col-2">
          <img className="img-fluid" src={imagen} alt="imagen" />
        </div>
        <div className="col">
          <div className="row">
            <b>{primeraLetraMayuscula(nombre)}</b>
          </div>
        </div>
        <div className="col">
          <button className="btn btn-outline-danger m-2" onClick={handleDecrement}>-</button>
          <span className="border px-2">{count}</span>
          <button className="btn btn-outline-success m-2" onClick={handleIncrement}>+</button>
        </div>
        <div className="col">
          $ {precio}
        </div>
        <p className='m-2' id="tot"> SubTotal : ${total.toLocaleString()} </p>
      </div>
    </div>
  );
};

export default Cart
