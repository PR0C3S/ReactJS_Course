import { Link, Typography } from '@mui/material';
import React from 'react';

const Copyright = () => {
    return (
       <Typography variant='body2' color='GrayText' align='center'>
        {'Copyright (C)'}
        <Link color='inherit' href='/https://imaginaformaicon.com'>
            Imagina Informacion
        </Link>
        {' '}
        { new Date().getFullYear() }
       </Typography>
    );
}

export default Copyright;
