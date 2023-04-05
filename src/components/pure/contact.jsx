import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const ContactComponent = ({contact}) => {
    return (
        <div>
            <h2>Nombre: { contact.nombre }</h2>
            <h2>Apellido: { contact.apellido }</h2>
            <h2>Email: { contact.email }</h2>
            <h3>Estado: { contact.isConectado ? 'Contacto En Linea' : 'Contacto No Disponible'  }</h3>
        </div>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default ContactComponent;
