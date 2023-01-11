import React, { useState } from 'react';
import 'firebase/auth';
import './Auth.css';


//Componente de autenticación de usuario: crea uno si no existe, si existe permite loguearse con un email y contraseña. Se utiliza Autentication de Firestore.

const Auth = () => {

    //Variables en el State que almacenan los valores de usuario y contraseña
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


// Función Submit para enviar los datos
    const submit= async()=>{
       
    }
 
    return (
        <div>
            <form className="mainAuth">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        E-mail
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        onChange={(evento)=>setEmail(evento.target.value)}
                    />
                    <div id="emailHelp" className="form-text">
                        Ingresá el correo electrónico.
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        onChange={(evento)=>setPassword(evento.target.value)}
                    />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                        Check me out
                    </label>
                </div>
                <button type="submit" className="btn btn-primary" onClick={submit}>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Auth;

