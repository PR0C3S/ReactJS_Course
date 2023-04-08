import React, { useState } from 'react';

/// Login / Logout buttons
const LoginButton= ({action}) => {
    return (
        <button onClick={action} type="button" className="btn btn-success"> Login</button>
    );
}

const LogoutButton= ({action}) => {
    return (
        <button onClick={action} type="button" className="btn btn-danger"> Logout</button>
    );
}



const OptionalRender = () => {
    
    const [access, setAccess] = useState(true);
    const [nMessages, setNMessages] = useState(0);


    const loginAction = () => {
        setAccess(true);
    }

    const logoutAction = () => {
        setAccess(false);
    }

    
   
    let optionalButton;

    if(access){
        optionalButton = <LogoutButton action={logoutAction}></LogoutButton>
    }else{
        optionalButton = <LoginButton action={loginAction}></LoginButton>
    }

     /*
    Otra forma de hacerlo
    const updateAccess = () => {
        setAccess(!access);
    }

    if(access){
        optionalButton = <button onClick={updateAccess} type="button" className="btn btn-danger"> Logout</button>
    }else{
        optionalButton = <button onClick={updateAccess} type="button" className="btn btn-success"> Login</button>
    }
    */

    // Unread messages
    let addMessages = () => {
        setNMessages(nMessages+1)
    }

    return (
        <div>
            {optionalButton}
            {access ? 
            (
            <div>
            { nMessages > 0 && nMessages ===1 && <p>You have {nMessages} new message...</p> }
            { nMessages > 1 && <p>You have {nMessages} new messages...</p> }
            { nMessages === 0 && <p>There are no new messages</p> }
            <button type="button" className="btn btn-primary" onClick={addMessages}>Add message</button>
            </div>
            ) : null}
           

        </div>
    );
}

export default OptionalRender;
