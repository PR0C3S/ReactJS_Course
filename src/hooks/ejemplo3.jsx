/**
 * Ejemplo Hooks:
 * - useState()
 * - useContext()
 */

import React, { useState, useContext } from 'react';


/**
 * 
 * @returns Componente 1
 * Dispone de un contexto que va a tener un valor que recibe
 * desde el padre
 */
const miContexto = React.createContext(null);
const Componente1 = () => {
    
    //Inicializamos un estado vacio que va a rellenarse con los datos del padre
    const state = useContext(miContexto);

    return (
        <div>
            <h1> El token es: {state.token}</h1>
            <Componente2></Componente2>
        </div>
    );
}


const Componente2 = () => {
    
    const state = useContext(miContexto);

    return (
        <div>
            <h2>La sesion es: {state.sesion}</h2>        
        </div>
    );
}


export default function MiComponenteConContexto() {
    const estadoInicial = {
        token: '1234567',
        sesion: 1
    }

    //Creamos el estado del componente
    const [sesionData, setSesionData] = useState(estadoInicial);
  
    function actualizarSesion()
    {
        setSesionData(
            {
                token: 'JWT123123213',
                sesion: sesionData.sesion + 1
            }
        )
    }
    return (
        <miContexto.Provider value={sesionData}>
            {/* Todo lo que esta aqui dentro puede leer los datos de sesionData*/}
            {/*Ademas, si se actualiza, los componentes de aquim tambien lo actualizan*/ }
            <h1>***Ejemplo de useState() y useContext()***</h1>
            <Componente1></Componente1>
            <button onClick={actualizarSesion}>Actualizar sesion</button>
        </miContexto.Provider>
  )
}


