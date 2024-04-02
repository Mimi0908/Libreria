import React from 'react';
import './login.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const SignUp = () => {
    return (
        <div>
            <Header />
            <div className="bloque">
                <div className="registro">
                    <h1>Registro</h1>
                    <form>
                        <div className="mb-3 caja">
                            <label for="exampleInputEmail1" className="form-label">Correo Electrónico</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3 caja">
                            <label for="exampleInputEmail1" className="form-label">Usuario</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3 caja">
                            <label for="exampleInputEmail1" className="form-label">Nombres</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3 caja">
                            <label for="exampleInputEmail1" className="form-label">Apellidos</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3 caja">
                            <label for="exampleInputPassword1" className="form-label">Contraseña</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3 caja">
                            <label for="exampleInputPassword1" className="form-label">Confirmar contraseña</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="cajabtn">
                            <button type="submit" className="btn btn-danger">Registrar</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default SignUp;
