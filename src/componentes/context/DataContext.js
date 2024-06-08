// React provee información de components sin importar que tan profundo de la jerarquía de componentes este


import React, { useState,createContext } from "react"; // esto viene de react

export const DataContext = createContext(); // Es igual a lo que importamos de react

const DataProvider = ({children}) =>{
    const [librosDelCarrito, setLibrosDelCarrito] = useState([])
    const [cantidadElementos, setCantidadElementos] = useState(0) // usestate es para setear la variable a como esta aquí

    return(
        // todos los valores que esten dentro de este componente se van a repartir en toda la aplicación
        

        <DataContext.Provider value = {{librosDelCarrito, setLibrosDelCarrito, cantidadElementos,setCantidadElementos}}> {children} </DataContext.Provider>

        //lo que hagamos, hay que crear el dataprovider

        // los 4 componentes que estan dentro de los parametros son los que va a enviar dentro de toda la web
    );
}

export default DataProvider;