import React from 'react';
import Header from './header/Headerinicio';
import CardList2 from './body/CardList2';
import Footer from './footer/Footer';

const AutoresUsuario = () => {
    const [autorSeleccionada, setautorSeleccionada] = useState(null);

    useEffect(() => {
        const autorGuardada = localStorage.getItem('autorSeleccionada');
        if (autorGuardada) {
            setautorSeleccionada(autorGuardada);
        }
    }, []);
    return (
        <div>
            <Header/>
            <CardList2 autorSeleccionada={autorSeleccionada} />
            <Footer/>
        </div>
    );
}

export default AutoresUsuario;
