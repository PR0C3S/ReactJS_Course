import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const AboutPage = () => {

    const location = useLocation();

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
            <h1>About | FAQs Page</h1>
            <div>
                <button onClick={() => goTo('/')}>Go to Home</button>
                <button onClick={() => goTo(-1)}>Go back</button>
                <button onClick={() => goTo(1)}>Go forward</button>
            </div>
        </div>
    );
}

export default AboutPage;
