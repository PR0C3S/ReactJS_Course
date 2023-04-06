/**
 * Ejemplo de componente de tipo clase que dispone de los metodos de ciclo de vida
 */

import React, { Component } from 'react';

class LifeCycleExample extends Component {

    constructor(props)
    {
        super(props);
        console.log('CONSTRUCTOR: Cuando se instancia el componente');
    }

    componentWillMount(){
        //! DEPRECATED
        console.log('WillMount: Antes del montaje del componente');
    }

    componentDidMount(){
        console.log('DidMount: Justo al acabar el montaje del componentes, Antes de renderizarlo');
    }

    componentWillReceiveProps(nexxtProps){
        //! DEPRECATED
        console.log('WILLReceiveProps: Si va a recibir nuevas props');
    }

    shouldComponentUpdate(nextProps, nexState){
        /**
         * Controlar si el componente debe o no actualizarse
         */
        //return true / false
    }

    componentWillUpdate(nextProps, nexState){
        //! DEPRECATED
        console.log('WillUpdate: Justo antes de actualizarse');
    }

    componentDidUpdate(prevProps, prevState){
        console.log('DidUpdate: Justo despues de actualizarse');
    }

    componentWillUnmount(){
        console.log('WillUnmount: Justo antes de desaparecer');
    }
    


    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default LifeCycleExample;
