import React, { useState, useRef } from 'react';

import './login.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [identificacionError, setIdentificacionError] = useState(false)
    const [nomError, setNomError] = useState(false)
    const [apellidoError, setApellidoError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [emailVacio, setEmailVacio] = useState(false)
    const [direccionError, setDireccionError] = useState(false)
    const [telefonoError, setTelefonoError] = useState(false)
    const [fechaNacimientoError, setFechaNacimientoError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [passwordErrorRepeat, setPasswordErrorRepeat] = useState(false)
    const [passComparacion, setPassComparacion] = useState(false)
    const form = useRef()
    function idError() {
        setIdentificacionError(false)
    }
    function nombreError() {
        setNomError(false)
    }
    function apelliError() {
        setApellidoError(false)
    }
    function errorEmail() {
        setEmailError(false)
        setEmailVacio(false)
    }
    function dirError() {
        setDireccionError(false)
    }
    function telError() {
        setTelefonoError(false)
    }
    function errorFechaNacimiento() {
        setFechaNacimientoError(false)
    }
    function passError() {
        setPasswordError(false)
    }
    function passRepeat() {
        setPassComparacion(false)
        setPasswordErrorRepeat(false)
    }
    const [values, setValues] = useState({
        identificacion: "",
        nombres: "",
        apellidos: "",
        email: "",
        direccion: "",
        telefono: "",
        fechaNacimiento: "",
        password: "",
        passRepeat: ""
    });
    const handleChange = (e) => {
        const { name, value } = e.target
        const newValues = {
            ...values,
            [name]: value,
        }
        setValues(newValues)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        let validPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[]#?!@$%^&*-).{8,}$/
        let validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

        if (values.identificacion.length < 5 || values.identificacion.length > 10 || values.identificacion.length === 0) {
            setIdentificacionError(true)
            return
        } else if (values.nombres.length < 3 || values.nombres.length === 0) {
            setNomError(true)
            return
        } else if (values.apellidos.length < 3 || values.apellidos.length === 0) {
            setApellidoError(true)
            return
        } else if (values.email.length === 0) {
            setEmailVacio(true)
            return
        } else if (!validEmail.test(values.email)) {
            setEmailError(true)
            return
        } else if (values.direccion.length < 15) {
            setDireccionError(true)
            return
        } else if (values.telefono.length < 10 || values.telefono.length > 10) {
            setTelefonoError(true)
            return
        } else if (values.fechaNacimiento === "") {
            setFechaNacimientoError(true)
            return
        } else if (!validPassword.test(values.password)) {
            setPasswordError(true)
            return
        } else if (values.passRepeat.length === 0) {
            setPasswordErrorRepeat(true)
            return
        } else if (values.password !== values.passRepeat) {
            setPassComparacion(true)
            return
        }
    }
    fetch('http://localhost:3001/Sign-Up', {
        method: 'POST',
        headers: { "Content-Type": "application/json", "Accept": 'application/json' },
        body: JSON.stringify(values)
    })
        .then(response => {
            if (response.status === 200) {
                Swal.fire({
                    title: "Usuario creado con éxito",
                    icon: "success"
                })
                form.current.reset()
                window.location.hash = '/login'
            }
            if (response.Status === 400) {
                Swal.fire({
                    title: "No fue posible crear el usuario porque ya existe el correo ingresado " + values.email,
                    icon: "warning"
                })
            }
        })
        .catch((error) => {
            Swal.fire({
                title: "No fue posible finalizar el proceso de registro por un error interno del servidor",
                icon: "error"
            })
        })
    return (
        <div>
            <Header />
            <div className="bloque">
                <div className="registro">
                    <h1>SIGN UP</h1>
                    <form onSubmit={handleSubmit} ref={form}>
                        <div className="mb-3 caja">
                            <label for="exampleInputEmail1" className="form-label">Identificación</label>
                            <input type="number" className="form-control" name="identificacion" id="identificacion" aria-describedby="emailHelp" placeholder='Debe estar entre 5 y 10 dígitos' onChange={handleChange} onClick={idError} />
                            {identificacionError ? <p>La identificación debe estar entre 5 y 10 números</p> : ""}
                        </div>
                        <div className="mb-3 caja">
                            <label for="exampleInputEmail1" className="form-label">Nombres</label>
                            <input type="text" className="form-control" name="nombres" id="nombres" aria-describedby="nameHelp" placeholder='Debe ser mínimo 3 caracteres' onChange={handleChange} onClick={nombreError} />
                            {nomError ? <p>El nombre debe contener mínimo 3 caracteres</p> : ""}
                        </div>
                        <div className="mb-3 caja">
                            <label for="exampleInputEmail1" className="form-label">Apellidos</label>
                            <input type="text" className="form-control" name="apellidos" id="apellidos" aria-describedby="apellidosHelp" placeholder='Debe ser de mínimo tres caracteres' onChange={handleChange} onClick={apelliError} />
                            {apellidoError ? <p>El apellido debe contener mínimo 3 caracteres</p> : ""}
                        </div>
                        <div className="mb-3 caja">
                            <label for="exampleInputEmail1" className="form-label">Correo Electrónico</label>
                            <input type="email" className="form-control" name="email" id="email" aria-describedby="emailHelp" placeholder='Debe ser un formato válido. Ejemplo: alguien@gmail.com' onChange={handleChange} onClick={errorEmail} />
                            {emailError ? <p>El email debe tener la estructura de una dirección de correo electrónico. Verbigracia: alguien@gmail.com</p> : ""}
                            {emailVacio ? <p>Debe introducir una dirección de correo electrónico.</p> : ""}
                        </div>
                        <div className="mb-3 caja">
                            <label for="exampleInputEmail1" className="form-label">Dirección</label>
                            <input type="text" className="form-control" name="direccion" id="direccion" aria-describedby="emailHelp" placeholder='Debe ser de mínimo quince caracteres' onChange={handleChange} onClick={dirError} />
                            {direccionError ? <p>La dirección debe contener mínimo 15 caracteres</p> : ""}
                        </div>
                        <div className="mb-3 caja">
                            <label for="exampleInputEmail1" className="form-label">Telefono</label>
                            <input type="number" className="form-control" name="telefono" id="telefono" aria-describedby="emailHelp" placeholder='Debe ser de diez números' onChange={handleChange} onClick={telError} />
                            {telefonoError ? <p>El teléfono debe ser de 10 números</p> : ""}
                        </div>
                        <div className="mb-3 caja">
                            <label for="exampleInputEmail1" className="form-label">Fecha Nacimiento</label>
                            <input type="date" className="form-control" name="fechaNacimiento" id="fechaNacimiento" aria-describedby="emailHelp" placeholder='Debe ser de diez números' onChange={handleChange} onClick={errorFechaNacimiento} />
                            {fechaNacimientoError ? <p>Debe introducir una fecha de nacimiento</p> : ""}
                        </div>
                        <div className="mb-3 caja">
                            <label for="exampleInputPassword1" className="form-label">Contraseña</label>
                            <input type="password" className="form-control" name="password" id="password" onChange={handleChange} onClick={passError} />
                            {passwordError ? <p>La contraseña no cumple con los requisitos mínimos solicitados(Mínimo 8 caracteres de longitud. Almenos una letra mayúscula. Almenos una letra minúscula. Almenos un número. Almenos un caracter especial).</p> : ""}
                        </div>
                        <div className="mb-3 caja">
                            <label for="exampleInputPassword1" className="form-label">Confirmar contraseña</label>
                            <input type="password" className="form-control" name="passRepeat" id="passRepeat" onChange={handleChange} onClick={passRepeat} />
                            {passComparacion ? <p>Las contraseñas ingresadas no coinciden</p> : ""}
                            {passwordErrorRepeat ? <p>Este campo no puede quedar vacío.</p> : ""}
                        </div>
                        <div className="form-check d-flex justify-content-center mb-5">
                            <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                            <label className="form-check-label" htmlFor="form2Example3g">
                                Acepta todos nuestros <a href="#!" className="text-body"><u>Terminos y condiciones</u></a>
                            </label>
                        </div>
                        <div className="cajabtn">
                            <button type="submit" className="btn btn-danger">Registrar</button>
                        </div>
                        <p className="text-center text-muted mt-5 mb-0">Tienes una cuenta? <a href="#!" className="fw-bold text-body"><u><Link to='/login'>Login here</Link></u></a></p>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default SignUp;
