import axios from 'axios';

/**
 * Login Method to Reqres endpoint
 * @param { string } email 
 * @param { string } password 
 */

const url = 'https://reqres.in/api';


export const login = (email, password) =>{
    let body = {
        email: email,
        password: password
    }

    // Returns the response with a promise
    return axios.post(url+'/login',body)
}

// TODO Obtain all users
export const getAllUsers = () =>{
    return axios.get(url+'/users');
}

//TODO Obtain all paged users
export const getAllPagedUsers= (page) =>{
    return axios.get(url+`/users?page=${page}`);
}

//TODO Obtain user by ID
export const getUserById = (id) =>{
    return axios.get(url+`/users/${id}`);
}

//TODO Create user
export const createUser = (name, job)=>{
    let body ={
        name: name,
        job: job
    }
     // Returns the response with a promise
     return axios.post(url+'/users',body)
}
//TODO Update user
export const updateUserById = (id,name, job)=>{
    let body ={
        name: name,
        job: job
    }
     // Returns the response with a promise
     return axios.put(url+`/users/${id}`,body)
}

//TODO Delete user
export const deleteUserById = (id) =>{
    return axios.delete(url+`/users/${id}`);
}

