import React, { useState } from 'react';

// Definiendo Estilos en constantes:

//? Estilo para usuario logueado
const loggedStyle = {
    color: 'green'
}

//? Estilo para usuario no logueado
const unloogedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
}

const GreetingStyled = ( {name='undefined'} ) => {

    // Generamos un estado para el componete y asi controlar si esta loguado o no el usuario
    const [isLogged, setIsLogged] = useState(false);

    return (
        <div style={isLogged ? loggedStyle : unloogedStyle}>
            {
                isLogged ? (<p>Hi, {name}</p>) : (<p>Please login</p>) 
            }
            <button onClick={() =>{
                console.log('Push Botton');
                setIsLogged(!isLogged);
            }}>{ isLogged ? 'Logout' : 'Login'}</button>
        </div>
    );
}

export default GreetingStyled;