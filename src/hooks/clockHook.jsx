import React, { useState, useEffect } from 'react';

const ClockHook = () => {

    const initialState = {
        // Se genera una fecha como estado inicial del componente funcional
        fecha: new Date(),
        edad: 0,
        nombre: 'John',
        apellidos: 'Pena'
    }

    const [state, setState] = useState(initialState);
    

    useEffect(() => {
        const timerID = setInterval (
            () => tick(), 1000
         );
        return () => {
            clearInterval(timerID);
        };
    });

    function tick(){

        let edad = state.edad +1;
        let nombre = state.nombre;
        let apellidos = state.apellidos;
        setState(
            {
                fecha: new Date(),
                edad,
                nombre,
                apellidos
            }
        )
        
     }
    return (
        <div>
         <h2>
         Hora Actual:
         {state.fecha.toLocaleTimeString()}
         </h2>
         <h3>{state.nombre} {state.apellidos}</h3>
         <h1>Edad: {state.edad}</h1>
        </div>
    );
}

export default ClockHook;
