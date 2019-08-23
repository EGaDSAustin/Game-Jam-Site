import React from 'react';
import { Container, Button } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom'
import styled from 'styled-components';
import Fab from '@material-ui/core/Fab';
import sparkle1 from '../assets/sparkle1.JPG';
import sparkle2 from '../assets/sparkle2.JPG';

const StyledContainer = styled(Container)`
    padding-top: 0;
`;

const styles = {
  image: {
    maxWidth: '100%',
    width: 'auto',
    verticalAlign: 'middle',
    padding: '20px'
  }
};

export class Register extends React.Component {
    render(){
        return(
          
            <StyledContainer>
              <img src = {sparkle1} alt='left sparkles' style={styles.image}/>
              <Fab variant="extended" aria-label="add" color="primary" to="/register" component={RouterLink}>
                Register
              </Fab>
              <img src = {sparkle2} alt='right sparkles' style={styles.image}/>
            </StyledContainer>
        );
    }
}