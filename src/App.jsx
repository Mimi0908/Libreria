import React from 'react';
import {Routes, Route, HashRouter } from 'react-router-dom';
import Inicio from './componentes/inicio';

import InicioSecion from './componentes/inicioSecion';
import Registro from './componentes/registro';

import Sesion from './componentes/sesion';

const App = () => {
    return (
       <HashRouter>
        <Routes>
            <Route exact path='/' element={<Inicio/>}/>
            <Route exact path='/Sign-Up' element={<Registro/>}/>
            <Route exact path='/Login' element={<InicioSecion/>}/>
            <Route exact path='/Sesion' element={<Sesion/>}/>
        </Routes>
       </HashRouter>
    );
}

export default App;
