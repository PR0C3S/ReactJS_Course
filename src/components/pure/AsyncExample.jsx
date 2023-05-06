import React from 'react';

const AsyncExample = () => {
    
    async function GenerateNumber(){
        return 1; //
    }

    function ObtainNumber(){
        GenerateNumber()
            .then( (response) => alert(`Response: ${response}`))
            .catch((error) => alert(`Something went wrong: ${error}`));
    }
    
    async function SaveSessionStorage(key, value){
        sessionStorage.setItem(key, value);
        return Promise.resolve(sessionStorage.getItem(key));
    }

    function ShowStorage(){
        SaveSessionStorage('name','John')
            .then( (response) =>{
                let value = response;
                alert(`Saved name: ${value}`);
            }).catch( (error) =>{
                alert(`Something went wrong: ${error}`)
            }).finally( () => console.log('SUCCESS: Name saved and retreived'));
    }

    async function GeneratePromiseNumber(){
        return Promise.resolve(2);
    }

    function ObtainGeneratePromiseNumber(){
        GeneratePromiseNumber()
            .then( (response) => alert(`Response: ${response}`))
            .catch((error) => alert(`Something went wrong: ${error}`));
    }

    async function ObtainMessage(){
        let promise = new Promise((resolve,reject) =>{
            setTimeout(() => resolve('Hello world'),2000)
        });

        let message = await promise;
        
        await alert(`Message receive: ${message}`);
    }

    const returnError = async() =>{
        await Promise.reject(new Error('Oooops!'));
    }

    const ConsumeError = () =>{
        returnError()
        .then((response) =>{
            alert(`Everything is OK: ${response}`);
        })
        .catch((error) =>{
            alert(`Something went wrong: ${error}`);
        })
        .finally( () => {
            alert(`Finally success`);
        })
    }

    const UrlNotFound = async () =>{
        try{
            let response = await fetch('https://invalidURL.com')
            alert(`Response: ${JSON.stringify(response)}`);
        }catch(error){
            alert(`Something went wrong with your URL: ${error}`);
        }
    }

    const MultiplePromise = async () =>{
        let results = await Promise.all([
            fetch('https://regres.in/api/users'),
            fetch('https://regres.in/api/users?page=2')
        ]).catch( (error) => {
            alert(`Something went wrong with your URLs: ${error}`);
        })
    }


    return (
        <div>
        <h1>Async,Promise Examples</h1>
            <button onClick={ObtainNumber}>Obtain Number</button>
            <button onClick={ObtainGeneratePromiseNumber}>Obtain Number</button>
            <button onClick={ShowStorage} >Save Name and Show</button>
            <button onClick={ObtainMessage}>Receive message in 2 seconds</button>
            <button onClick={ConsumeError}>Obtain Error</button>
            <button onClick={UrlNotFound}>Request to Unknown URL</button>
            <button onClick={MultiplePromise}>Multiple Request to Unknown URL</button>
        </div>
    );
}

export default AsyncExample;
