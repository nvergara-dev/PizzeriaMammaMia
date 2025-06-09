import React, { useState } from 'react'

const Register = () => {
const [registro, setRegistro] = useState({
    email: '',
    pass: '', 
    confirmPass: ''
})
const handleChange = (e) => {
    setRegistro({ ...registro, [e.target.name]: e.target.value })  
}
const handleSubmit = async (e) => {
    e.preventDefault()
    const{email,pass,confirmPass} = registro
    
    //Validamos que los campos esten completos 
    if ( !email.trim() || !pass.trim() || !confirmPass.trim() ) {
        alert('Para continuar debe completar todos los campos del formulario!')
        return null
    }

    //Validamos el largo de la pass
    if ( pass.length < 6) {
        alert('La password debe tener almenos 6 caracteres')
        return null
    }

    //Validamos que ambas pass sean iguales
    if (pass !== confirmPass) {
        alert('Las contraseñas deben ser Iguales')
        return null
    }

    //si pasa todas las validaciones , registro esta ok
    alert('Registro Exitoso')

    //Limpiamos inputs
    setRegistro({
    email: '',
    pass: '', 
    confirmPass: ''
    })
}
    
return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <form className="m-2" onSubmit={handleSubmit}>
                <h1>Registrar</h1>           
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
                <div className="mb-3">
                    <label htmlfor="inputPassword33" class="col-sm-2 col-form-label">
                        Confirmar Contraseña
                    </label>
                    <input 
                        type="password"     
                        name="confirmPass"                    
                        value={registro.confirmPass} 
                        onChange={handleChange} 
                        placeholder="Repita su contraseña" 
                        class="form-control" 
                        id="inputPassword33"
                    />
                </div>            
                <button type="submit" class="btn btn-primary">
                    Registrar
                </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Register;
