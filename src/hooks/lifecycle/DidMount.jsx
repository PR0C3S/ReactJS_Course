/**
 * Ejemplo de uso del metodo del ciclo de vida en componente clase 
 * y el hook de ciclo de vida en componente funcional
 */

import React, { Component, useEffect } from 'react';

export class DidMount extends Component {

    componentDidMount()
    {
        console.log('Comportamiento ates de que el componente sea a;adido al DOM (renderice)');
    }
    render() {
        return (
            <div>
                <h1>DidMount</h1>
            </div>
        );
    }
}

export const DidMountHook = () => {


    useEffect(() => {
        console.log('Comportamiento ates de que el componente sea a;adido al DOM (renderice)');
    }, []); // cuando se deja los corchetes vacios se ejecuta solo 1 vez

    return (
        <div>
            <h1>DidMount</h1>
        </div>
    );
}

