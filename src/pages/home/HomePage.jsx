import React from 'react';
import { createSearchParams, useLocation, useNavigate } from 'react-router-dom';

const HomePage = () => {

    const location = useLocation();

    //history is a navigation in the last version
    const navigate = useNavigate();

    //goBack is navigate(-1)  navigate(-1)
    //goBack 2 page is (-2) navigate(-2)
    //go forward is (1) navigate(1)
    function goTo(path) {
        navigate(path);
    }

    function navigateProps(path){
        navigate({
            pathname: path,
            search: '?online=true', //query params
            state: {
                online: true
            }
        });
    }

    return (
        <div>
            <h1>Home Page</h1>
            <div>
                <button onClick={() => navigateProps('/online-state')}>Go to State</button>
                <button onClick={() => goTo('/profile')}>Go to Profile</button>
            </div>
        </div>
    );
}

export default HomePage;
