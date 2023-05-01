import React from 'react';
import {Home, Settings} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

const MenuListItems = ({list}) => {

    const navigate = useNavigate();

    const GetIcon = (icon) => {
        switch (icon) {
            case 'HOME':
                return (<Home/>)
            case 'Settings':
                return (<Settings/>)
        
            case 'TASKS':
                return (<Home/>)
            default:
                return (<Home/>)
        }
    }
    
    const GoTo = (path) => {
        navigate(path);
    }
    
        
    return (
        <List>
            {list.map( ({text, path, icon}, index) =>{
               return (
                    <ListItem key={index} onClick={() => GoTo(path)} >
                        <ListItemIcon>
                            {GetIcon(icon)}
                        </ListItemIcon>
                        <ListItemText primary={text}></ListItemText>
                    </ListItem>
                )
            })}
        </List>
    );
}

export default MenuListItems;

