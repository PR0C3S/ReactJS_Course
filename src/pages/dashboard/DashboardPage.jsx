import { Button } from '@mui/material';
import React from 'react';
import Copyright from '../../components/pure/copyright';
import MenuListItems from '../../components/pure/MenuListItems';
import { useNavigate } from 'react-router-dom';

const DashboardPage = () => {

    const navigate = useNavigate();

    const GoTo = (path) =>{
        navigate(path);
    }

    return (
        <div>
            <MenuListItems></MenuListItems>
            <Button variant='contained' onClick={() => GoTo('/login')}>Log out</Button>
            <Copyright></Copyright>
        </div>
    );
}

export default DashboardPage;
