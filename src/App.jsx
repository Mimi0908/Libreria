import React from 'react';
import {Routes, Route, HashRouter } from 'react-router-dom';
import Inicio from './componentes/inicio';

import InicioSecion from './componentes/inicioSecion';
import Registro from './componentes/registro';

const App = () => {
    return (
       <HashRouter>
        <Routes>
            <Route exact path='/' element={<Inicio/>}/>
            <Route exact path='/Sign-Up' element={<Registro/>}/>
            <Route exact path='/Login' element={<InicioSecion/>}/>
        </Routes>
       </HashRouter>
    );
}

export default App;
