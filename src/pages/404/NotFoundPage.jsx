import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {

    const navigate = useNavigate();

    //goBack is navigate(-1)  navigate(-1)
    //goBack 2 page is (-2) navigate(-2)
    //go forward is (1) navigate(1)
    function goTo(path) {
        navigate(path);
    }
    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <div>
                <button onClick={() => goTo('/')}>Go home</button>
            </div>
        </div>
    );
}

export default NotFoundPage;
