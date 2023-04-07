import React, { useRef } from 'react';
import { Contact } from '../../../models/contact.class';
import PropTypes from 'prop-types'

const NewContactForm = ({addContact}) => {

    const firstNameRef = useRef('');
    const lastNameRef = useRef('');
    const emailRef = useRef('');

    function add(e)
    {
        e.preventDefault();
        const newContact = new Contact(
            firstNameRef.current.value,
            lastNameRef.current.value,
            emailRef.current.value,
            false
        )
        addContact(newContact);
    }

    return (
        <div>
        <div>
            <h2>Create New Contact</h2>
        </div>
            <form onSubmit={add}>
            <div className="mb-3">
                <label for="firstNameRef" className="form-label">First Name</label>
                <input type="text" className="form-control" id="firstNameRef" ref={firstNameRef} required autoFocus/>
            </div>
            <div className="mb-3">
                <label for="lastNameRef" className="form-label">Last Name</label>
                <input type="text" className="form-control" id="lastNameRef" ref={lastNameRef} required autoFocus/>
            </div>
            <div className="mb-3">
                <label for="emailRef" className="form-label">Email</label>
                <input type="email" className="form-control" id="emailRef" placeholder="name@example.com" ref={emailRef} required autoFocus/>
            </div>

            <button type="submit" className="btn btn-primary">Create contact</button>
            </form>
        </div>
    );
}
NewContactForm.propTypes = {
    addContact: PropTypes.func.isRequired
}

export default NewContactForm;

