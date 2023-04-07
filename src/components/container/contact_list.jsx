import React, { useState } from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';
import NewContactForm from '../pure/forms/newContactForm';


const ContactListComponent = () => {
    
    const defaultContact1 = new Contact('John','Pena','example@gmail.com',false)
    const defaultContact2 = new Contact('Harold','Pena','example@gmail.com',true)
    const [contacts, setContacts] = useState([defaultContact1,defaultContact2]);

    function removeContact(contact){
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts.splice(index, 1);
        setContacts(tempContacts);
    }

    function addContact(contact){
        const tempContacts = [...contacts];
        tempContacts.push(contact);
        setContacts(tempContacts);
    }

    function changeStatus(contact){
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts[index].isConnect = !tempContacts[index].isConnect;
        setContacts(tempContacts);
    }



    return (
        <div>
        <div className="card">
            <div className="card-header text-bg-primary">
                <h1>List Of Contacts</h1>
            </div>
            <div className="card-body">
            <table className="table table-striped table-hover">
                <thead>
                    <th scope='col'>First Name</th>
                    <th scope='col'>Last Name</th>
                    <th scope='col'>Email</th>
                    <th scope='col'>Status</th>
                    <th scope='col'>Actions</th>
                </thead>
                <tbody>
                   { 
                    contacts.map( (actContact, index) =>{
                        return ( <ContactComponent contact={actContact} key={index} removeContact={removeContact} changeStatus={changeStatus}></ContactComponent>)
                    })
                    }
                </tbody>
            </table>
            <NewContactForm addContact={addContact}></NewContactForm>
            </div>
        </div>
        </div>
    );
};

export default ContactListComponent;
