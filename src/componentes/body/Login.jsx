import React from 'react';
import './login.css';

const Login = () => {
    return (
        <div>
            <div className="bloque">
                <div className="contenido">
                    <h1>LOGIN</h1>
                    <form>
                        <div className="mb-3 caja">
                            <label for="exampleInputEmail1" className="form-label">Correo Electrónico o Usuario</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                        </div>
                        <div className="mb-3 caja">
                            <label for="exampleInputPassword1" className="form-label">Contraseña</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <button type="submit" className="btn btn-danger">Ingresar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
