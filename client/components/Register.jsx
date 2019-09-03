import React from 'react';
import { Link as RouterLink } from 'react-router-dom'
import Fab from '@material-ui/core/Fab';
import sparkle from '../assets/sparkle.PNG';

const styles = {
  image: {
    width: '76px', // enforce the same width so that register button is centered
    height: 'auto',
    verticalAlign: 'middle',
    padding: '0px 20px'
  }
};

export class Register extends React.Component {
    render(){
        return(
            <div style={{paddingTop: '0'}}>
              <img src = {sparkle} alt='left sparkles' style={styles.image}/>
              <Fab variant="extended" aria-label="add" color="primary" to="/register" component={RouterLink}>
                Register
              </Fab>
              <img src = {sparkle} alt='right sparkles' style={styles.image}/>
            </div>
        );
    }
}