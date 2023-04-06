/**
 * Ejemplo de uso del metodo componentWillUnmount para componente clase
 * Ejemplo de uso del hooks para componente funcional
 * (cuando el compnente va a desaparecer)
 */
import React, { Component, useEffect } from 'react';

export class WillUnmount extends Component {
    
    componentWillUnmount(){
        console.log('Comportamiento antes de que el componente desaparezca');
    }
    render() {
        return (
            <div>
                <h1>WillUnmount</h1>                
            </div>
        );
    }
}


export const WillUnmountHook = () => {

    useEffect(() => {
        //aqui no ponemos nada
        return () => {
            //El return es lo que se ejecuta cuando el componente ha terminado
            console.log('Comportamiento antes de que el componente desaparezca');
        };
    }, []); //los corchetes vacio para que solo se ejecute 1 sola vez
    return (
        <div>
            <h1>WillUnmount</h1>                
        </div>
    );
}
