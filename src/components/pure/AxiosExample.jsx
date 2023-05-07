import React, { useState, useEffect} from 'react';
import { getRandomUser } from '../../services/axioService';

const AxiosExample = () => {

    const [user, setUser] = useState(null);

    /*useEffect(() => {
        generateRandomUser();
    }, []);
    */

    function obtainRandomUser() {
        getRandomUser()
        .then( (response)=>{
            if(response.status === 200){
                setUser(response.data.results);
            }
        })
        .catch( (error) =>{
            alert(`Something went wrong: ${error}`);
        })
    }
    return (
        <div>
            <h1>Axios example</h1>
            { user != null 
            ?(
                <div>
                    <h2>{user.title} {user.first} {user.last}</h2>
                    <h3>{user.email}</h3>
                </div>
            )
            : (
                <div>
                    <p>Generate a new User</p>
                    <button onClick={obtainRandomUser}> Random user</button>
                </div>
            )
            }
        </div>
    );
}

export default AxiosExample;
