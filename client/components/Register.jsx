import React from 'react';
import { Container, Button } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import Fab from '@material-ui/core/Fab';

const StyledContainer = styled(Container)`
    padding-top: 5%;
`;

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export class Register extends React.Component {
    render(){
        return(
            
            <StyledContainer>
                  <Fab variant="extended" aria-label="add" color="primary" to="/register" component={RouterLink}>
                Register
            </Fab>
            </StyledContainer>
        );
    }
}