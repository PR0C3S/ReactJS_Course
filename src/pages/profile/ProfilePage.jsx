import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = ({ user }) => {
    //history is a navigation in the last version
    const navigate = useNavigate();

    //goBack is navigate(-1)  navigate(-1)
    //goBack 2 page is (-2) navigate(-2)
    //go forward is (1) navigate(1)
    function goTo(path) {
        navigate(path);
    }
    
    return (
        <div>
            <h1>Your Profile</h1>
            <div>
                <button onClick={()=> goTo('/tasks')}>Tasks</button>
                <button onClick={()=> goTo(-1)}>Go back</button>
            </div>
        </div>
    );
}

export default ProfilePage;
