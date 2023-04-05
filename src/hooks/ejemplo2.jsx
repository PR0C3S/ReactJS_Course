/**
 * Ejemplo de uso de: 
 * - useState() - permite tener estados mutables
 * - useRef() - sirve para referenciar elementos dentro de la vista
 * - useEffect() - sirve para controlar cambios en la vista
 */

import React, { useState, useRef, useEffect } from 'react';

const Ejemplo2 = () => {

    //Vamos a acrear dos contadores distintos cada uno en un estado diferente
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);
    
    /**
     * Vamos a crear una referencia con useRef() para asociar una variable con un
     * elemento del DOM del componente (vista HTML)
     */
    const miRef = useRef();

    function incrementar1()
    {
        setContador1(contador1 + 1);
    }

    function incrementar2()
    {
        setContador2(contador2 + 1);
    }

    /**
     * Trabajando con useEffect
     */
    /**
     * ? Caso 1: Ejecutar siempre un snippet de codigo
     * Cada vez que haya un cambio en el estado del componente se ejecuta
     * aquello que este dentro del useEffect()
     */

    //useEffect(() => {
    //    console.log('Cambio en el estado del componente');
    //    console.log('Mostrando referencia a elemento del DOM:');
    //    console.log(miRef);
    //});

    /**
     * ? Caso 2: Ejecutar solo cuando cambie el contador 1
     * Cada vez que haya un cambio en contador 1, se ejecutaa lo que diga el useEffect()
     * En caso de que cambie contador 2, no habra ejecucion
     */
    //useEffect(() => {
    //    console.log('Cambio en el estado del contador 1');
    //    console.log('Mostrando referencia a elemento del DOM:');
    //    console.log(miRef);
    //}, [contador1]);

    /**
     * ? Caso 3: Ejecutar solo cuando cambie el contador 1 o contador 2
     * Cada vez que haya un cambio en contador 1, se ejecutaa lo que diga el useEffect()
     * Cada vez que haya un cambio en contador 2, se ejecutaa lo que diga el useEffect()
     */
    useEffect(() => {
        console.log('Cambio en el estado del contador 1');
        console.log('Mostrando referencia a elemento del DOM:');
        console.log(miRef);
    }, [contador1, contador2]);


    return (
        <div>
            <h1>***Ejemplo de useState(), useRef() y useEffect() ***</h1>
            <h2>Contador 1: {contador1}</h2>  
            <h2>Contador 2: {contador2}</h2>
            {/*Elemento referenciado*/}
            <h4 ref={miRef}>
                Ejemplo de elemento referenciado
            </h4>      

            <div>
                <button onClick={incrementar1}>Incrementar 1</button>
                <button onClick={incrementar2}>Incrementar 2</button>

            </div>
        </div>
    );
}

export default Ejemplo2;