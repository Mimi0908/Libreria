import React from 'react';
import './login.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import iconGoogle from '../../../public/iconGoogle.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <Header />
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
                        <div className="boxInt">
                            <div className="d-flex align-items-center gap-1">
                                <input className="form-check-input" type="checkbox" />
                                <label className="form-check-label" >
                                    Remember me.
                                </label>
                            </div>
                            <div className="forget">
                                <p className="text-center text-muted mt-3"><a href='#' className="fw-bold text-danger">Forgot your password?</a></p>
                            </div>
                        </div>
                        <div className="cajabtn">
                            <button type="submit" className="btn btn-danger btnL">Login</button>
                        </div>
                        <p className="text-center text-muted mt-3 mb-0">No tienes una cuenta? <Link to='/Sign-Up'><a href="#!" className="fw-bold text-danger"><u>Registrate</u></a></Link></p>
                        <div className='p-3'>
                            <div className='border-bottom text-center' id='linea'>
                                <span className='bg-white px-3'>or</span>
                            </div>

                        </div>
                        <div className='caja-botones'>
                            <div className="btn d-flex gap-2 justify-content-center border mt-3 shadow-sm btn-google">
                                <img src={iconGoogle} className='icon' />
                                <p className='fw-semibold text-secondary mb-0'>Continue with Google</p>
                            </div>
                            <div className="btn btn-primary gap-2 d-flex gap-0 justify-content-center border mt-3 shadow-sm btn-facebook">
                                <FacebookIcon  className='icon'/>
                                <p className='fw-semibold mb-0'>Continue with Facebook</p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Login;
