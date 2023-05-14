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
                setUser(response.data.results[0]);
            }
        })
        .catch( (error) =>{
            alert(`Something went wrong: ${error}`);
        })
    }
    return (
        <div>
            <h1>Axios example</h1>
            { user != null && (
                <div>
                    <img alt='avatar' src={user.picture.large}/>
                    <h2>{user.name.title} {user.name.first} {user.name.last}</h2>
                    <h3>{user.email}</h3>
                </div>
            )
            }
            <p>Generate a new user</p>
            <button onClick={obtainRandomUser}> Random user</button>

        </div>
    );
}

export default AxiosExample;
