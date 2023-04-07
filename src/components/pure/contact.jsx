import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const ContactComponent = ({contact, changeStatus, removeContact}) => {

    function iconIsConnect(){

        if(contact.isConnect)
        {
            return (<i className='bi bi-toggle-on' style={ {color: 'green'}} onClick={() => changeStatus(contact)}></i>)
        }else{
            return (<i className='bi bi-toggle-off' style={ {color: 'gray'}} onClick={() => changeStatus(contact)}></i>)
        }

    }
    return (
        <tr>
            <td>{ contact.firstName }</td>
            <td>{ contact.lastName }</td>
            <td>{ contact.email }</td>
            <td>{ iconIsConnect() }</td>
            <td><i className='bi bi-trash' style={ {color: 'red'}} onClick={() => removeContact(contact)}></i></td>
        </tr>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact).isRequired,
    changeStatus: PropTypes.func.isRequired,
    removeContact: PropTypes.func.isRequired
};


export default ContactComponent;
