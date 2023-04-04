import React, {useState} from "react";
import PropTypes from "prop-types";

const GreetingF = (props) => {

    const [age, setAge] = useState(12); 
    
    const birthday = () => {
        setAge(age+1);
    }
 
    return (
    <div>
      <h1>Hello {props.name} desde componente funcional!</h1>
      <h2>Age: {age}</h2>
      <div>
        <button onClick={birthday}> Cumplir años</button>
      </div>
      
    </div>
    
  );
};

GreetingF.propTypes = {};

export default GreetingF;
