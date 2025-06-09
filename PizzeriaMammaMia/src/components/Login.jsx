import React, { useState } from 'react'

const Login = () => {
  const [registro, setRegistro] = useState({
      email: '',
      pass: ''
  })
  const handleChange = (e) => {
      setRegistro({ ...registro, [e.target.name]: e.target.value })  
  }
  const handleSubmit = async (e) => {
      e.preventDefault()
      const{email,pass} = registro
      
      //Validamos que los campos esten completos 
      if ( !email.trim() || !pass.trim() ) {
          alert('Para continuar debe completar todos los campos del formulario!')
          return null
      }
  
      //Validamos el largo de la pass
      if ( pass.length < 6) {
          alert('La password debe tener almenos 6 caracteres')
          return null
      }
  
  
      //si pasa todas las validaciones , registro esta ok
      alert('Inicio de Sesion Exitoso')
  
      //Limpiamos inputs
      setRegistro({
      email: '',
      pass: ''
      })
  }  
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <form className="m-2" onSubmit={handleSubmit}>
                <h1>Login</h1>           
                <div className="mb-3">
                    <label htmlfor="inputEmail3" class="col-sm-2 col-form-label">
                        Email
                    </label>
                    <input 
                        type="email" 
                        name="email"
                        value={registro.email} 
                        onChange={handleChange} 
                        placeholder="Ingrese su correo electrónico" 
                        class="form-control" 
                        id="inputEmail3"
                    />
                </div>                        
                <div className="mb-3">
                    <label htmlfor="inputPassword3" class="col-sm-2 col-form-label">
                        Contraseña
                    </label>
                    <input 
                        type="password" 
                        name="pass"
                        value={registro.pass} 
                        onChange={handleChange} 
                        placeholder="Ingrese su contraseña" 
                        class="form-control" 
                        id="inputPassword3"
                    />
                </div>                                 
                <button type="submit" class="btn btn-primary">
                    Login
                </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;
