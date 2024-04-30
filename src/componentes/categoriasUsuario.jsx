import React, { useState, useEffect } from 'react';
import Header from './header/Headerinicio';
import CardList from './body/CardList';
import Footer from './footer/Footer';

const categoriasUsuario=()=> {
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

    useEffect(() => {
        const categoriaGuardada = localStorage.getItem('categoriaSeleccionada');
        if (categoriaGuardada) {
            setCategoriaSeleccionada(categoriaGuardada);
        }
    }, []);
    const reiniciarCategoria = () => {
        setCategoriaSeleccionada(null);
    };
    return (
        <div>
            <Header/>
            <CardList categoriaSeleccionada={categoriaSeleccionada} />
            <Footer/>
        </div>
    );
}

export default categoriasUsuario;