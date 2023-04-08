import React from 'react';


const LogoElement = () => {
    function changeColor()
    {
        console.log('Change color');
    }

    function stopColor(){
        console.log('Stop Color');
    }

    return (

    
        <div  
        style={{background: 'gray', width: 255,height: 255}}
        onMouseOver={changeColor}
        onMouseLeave={stopColor}
        onDoubleClick={stopColor}
        >

       
        </div>
    );
}

export default LogoElement;
