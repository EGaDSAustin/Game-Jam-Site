import React from 'react';
import { Container, Button } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom'
import styled from 'styled-components';

const StyledContainer = styled(Container)`
    padding-top: 5%;
`;

export class Register extends React.Component {
    render(){
        return(
            <StyledContainer>
            <Button variant="contained" color="primary" to="/register" component={RouterLink}>
                Click Here to Register! 
            </Button>
            </StyledContainer>
        );
    }
}