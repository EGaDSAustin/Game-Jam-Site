import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

export class Register extends React.Component {
    render(){
        return(
            <Button variant="contained" color="primary" to="/form" component={Link}>
                Click Here to Register! 
            </Button>
        );
    }
}