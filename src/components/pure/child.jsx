import React, { useRef } from 'react';

const Child = ( { name, send, update }) => {

    const messageRef = useRef('');
    const nameRef = useRef('');
    function pressButton(){
        const text = messageRef.current.value;
        alert(`Text in input: ${text}`);
    }

    function pressButtonParams(text){
        alert(`Text: ${text}`);
    }

    function submitName(e){
        e.preventDefault();
        update(nameRef.current.value)
    }

    return (
        <div style={ {background: 'cyan', padding: '30px'}}>
            <h2 onMouseOver={() => console.log('On Mouse Over')}>Child Component</h2>
            <h3>Hi, {name}</h3>
            <button onClick={ () => console.log('Pressed Button 1')}>Button 1</button>
            <button onClick={pressButton}>Button 2</button>
            <button onClick={()=> pressButtonParams(messageRef.current.value)}>Button 3</button>
            <input type='text' placeholder='Send a text to your father' 
                onFocus={ () => console.log('Input Focused')}
                onChange={(e) => console.log('Input changed: ', e.target.value)}
                onCopy={() => console.log('Copied text from input')}
                ref={messageRef}
            />
            <button onClick={() => send(messageRef.current.value)}>Send Message</button>
            <div style={ { marginTop: '20px'}}>
                <form onSubmit={submitName}>
                    <input type='text' placeholder='New name' ref={nameRef}/>
                    <button type='submit'> Update Name</button>
                </form>
            </div>
        </div>
    );
}

export default Child;
