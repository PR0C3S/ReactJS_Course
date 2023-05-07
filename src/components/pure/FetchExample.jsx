import React, { useState, useEffect} from 'react';
import { getAllUsers, getAllPagedUsers, getUserDetails, login } from '../../services/fetchService';

const FetchExample = () => {

    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState({});
    const [totalUsers, setTotalUsers] = useState(2);
    const [pages, setPages] = useState(2);
    const [usersPerPage, setUsersPerPage] = useState(6);

    
    useEffect(() => {
        obtainUsers();
    },[]);

    function obtainUsers() {
        getAllUsers()
            .then( (response) =>{
                console.log('All Users:', response.data);
                setUsers(response.data);
                setPages(response.total_pages);
                setUsersPerPage(response.per_page);
                setTotalUsers(response.total);
            })
            .catch( (error) =>{
                alert(`Error while retreiving your users: ${error}`);
            })
            .finally( () =>{
                console.log('Ended obtaining users:');
                console.table(users);
            })
    }

    function obtainPagedUsers(page) {
        getAllPagedUsers(page)
            .then( (response) =>{
                console.log('All Users:', response.data);
                setUsers(response.data);
                setPages(response.total_pages);
                setUsersPerPage(response.per_page);
                setTotalUsers(response.total);
            })
            .catch( (error) =>{
                alert(`Error while retreiving your users: ${error}`);
            })
            .finally( () =>{
                console.log('Ended obtaining users:');
                console.table(users);
            })
    }

    function obtainUserDetail(id) {
        getUserDetails(id)
            .then( (response) =>{
                console.log('User:', response.data);
                setSelectedUser(response.data);
            })
            .catch( (error) =>{
                alert(`Error while retreiving your users: ${error}`);
            })
            .finally( () =>{
                console.log('Ended obtaining user:');
                console.table(selectedUser);
            })
    }

    function authUser() {
        login('eve.holt@reqres.in','cityslicka')
            .then( (response) =>{
                console.log('Token', response.token);
                sessionStorage.setItem('token', response.token)
            })
            .catch( (error) =>{
                alert(`Error while login user: ${error}`);
            })
            .finally( () =>{
                console.log('Ended login user. Navigate to Home...');
            })
    }

    return (
        <div>
        <button onClick={authUser}>Auth User</button>
        <h1>Users:</h1>
        {users.map((user, index) => 
            (<p key={index} onClick={()=> obtainUserDetail(user.id)}>{user.first_name} {user.last_name}</p>))
        }
        <p>Showing {usersPerPage} users of {totalUsers} in total.</p>
        <button onClick={ () => obtainPagedUsers(1)}>1</button>
        <button onClick={ () => obtainPagedUsers(2)}>2</button>
        <div> 
            { selectedUser != null ? 
                (
                    <div>
                        <h3>User Details</h3>
                        <p>Name: {selectedUser.first_name}</p>
                        <p>Last Name: {selectedUser.last_name}</p>
                        <p>Email: {selectedUser.email}</p>
                        <img alt='Avatar' src={selectedUser.avatar} style={{height: '150px', width:'150px'}} />
                        </div>
                ):
                ( <h5>Please click on a User to see its details</h5> )
            }

        </div>
            
        </div>
    );
}

export default FetchExample;
