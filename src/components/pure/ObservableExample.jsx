import React, { useState } from 'react';
import { getNumbers } from '../../services/ObservableService';
const ObservableExample = () => {
    
    const [number, setNumber] = useState(0);

    const ObtainNumbers = () =>{
        
        console.log('Subsciption to Observable');
        getNumbers.subscribe({
            next(newNumber){
                console.log('New number: ',newNumber);
                setNumber(newNumber);
            },
            error(error){
                alert(`Something went wrong: ${error}`);
                console.log('Error in observable')
            },
            complete(){
                alert(`Finished with: ${number}`);
                console.log('Done with the observable');
            }
        })
    }

    return (
        <div>
            <h2>Number: {number}</h2>
            <button onClick={ObtainNumbers}>Obtain new numbers</button>
        </div>
    );
}

export default ObservableExample;
