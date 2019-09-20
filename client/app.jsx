import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { browserHistory } from 'react-router';
import "./app.css";
import GlobalStyle from './components/styles.js';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import imageMapResize from 'image-map-resizer'
import { TestForm } from "/forms"

import { Navbar } from './components/Navbar';
import { Title } from './components/Title';
import { Register } from './components/Register';
import { Schedule } from './components/Schedule';
import { Games } from './components/Games';
import { Sponsors } from './components/Sponsors';
import { Footer } from './components/Footer';
import { Theme } from './components/Theme';

import { Link as RouterLink } from 'react-router-dom'
import Fab from '@material-ui/core/Fab';
import { Typography } from '@material-ui/core';
// import MobileNavbar from './components/mobile/MobileNavbar.jsx';


const formUrl = "https://forms.gle/gDWmRyD17iM6np3f9"

class ScrollToTopOnMount extends React.Component {
    componentDidMount() {
      window.scrollTo(0, 0);
      imageMapResize();
    }
  
    render() {     
      return null;
    }
}

function ScrollToTop() {
  window.scrollTo({top: 0, behavior:'smooth'});
}

class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
            <Router 
            history={browserHistory}
            onUpdate={hashLinkScroll}
            >
            <GlobalStyle/>
            <Navbar/>
            <Switch>
              <Route exact path="/" render={routeProps => (
                  <div>
                    <ScrollToTopOnMount/>
                    <br/>
                      <div id='title'><Title/></div>
                      {/* <div id='register'><Register/></div> */}
                      <Fab variant="extended" aria-label="add" color="primary" to="/theme" onClick={ScrollToTop} component={RouterLink}>
                        Theme!
                      </Fab>
                      <div id='schedule'><Schedule/></div>
                      <div id='games'><Games/></div>
                      <div id='sponsors'><Sponsors/></div>
                    <Footer/>
                  </div>
              )}/>
              <Route path="/theme" component={Theme}/>
              <Route path='/submit' component={() => { 
                window.location.href = "https://itch.io/jam/ut-game-jam-2019"; 
                return null;
                }}/>
            </Switch>
            </Router>
            </MuiThemeProvider>
        );
    }
}


function hashLinkScroll() {
    const { hash } = window.location;
        if (hash !== '') {
        // Push onto callback queue so it runs after the DOM is updated,
        // this is required when navigating from a different page so that
        // the element is rendered on the page before trying to getElementById.
        setTimeout(() => {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) element.scrollIntoView();
        }, 0);
    }
}



let dark_color = '#5D5116';
let darker_color = '#302F0C';
let light_green = '#968326'
let caption_color = '#494B4E';
let accent_color = '#E4C400';
let white = '#FFFFFF';
let orange = '#DC7F23';
let yellow = "#F6B637";


// global style
const theme = createMuiTheme({
    typography: {
      h1: {
        fontFamily: 'Poppins',
        color: 'white',
        fontSize: '62px',
        lineHeight: '1.1em',
        letterSpacing: 'normal',
        fontWeight: '600'
      },
      h2: {
        fontFamily: 'Poppins',
        color: 'white',
        fontSize: '40px',
        lineHeight: '1.1em',
        letterSpacing: 'normal',
        fontWeight: '600'
      },
      h3: {
        fontFamily: 'Poppins',
        color: dark_color,
        fontSize: '28px',
        fontWeight: '600',
        letterSpacing: 'normal',
        lineHeight: '1.4em',
      },
      h4: {
        fontFamily: 'Futura LT Book',
        color: orange,
        fontSize: '30px',
        fontWeight: 'bold',
        letterSpacing: 'normal',
        lineHeight: '1.4em',
      },
      body1: {
        fontFamily: 'Futura LT Book',
        color: darker_color,
        fontSize: '15px',
        letterSpacing: 'normal',
        lineHeight: '1.8em',
      },
      subtitle1: {
        fontFamily: 'Raleway',
        color: dark_color,
        fontSize: '18px',
        fontWeight: '600',
        letterSpacing: 'normal',
        lineHeight: '1.5em',
      },
    },

    palette: {
        primary: {
          main: light_green,
          light: dark_color,
          dark: dark_color
        },
        secondary: {
          main: dark_color
        },
        text: {
          primary: dark_color,
          secondary: white
        }
    },
    overrides: {
        // Register button
        MuiFab: {
            label: {
                width: '130px'
            },
            primary: {
                backgroundColor: light_green
            },
            root: {
                
                textTransform: 'normal',
                fontFamily: 'Poppins',
                color: 'white',
                fontSize: '16px',
                lineHeight: '1.4em',
                letterSpacing: 'normal',
                fontWeight: '600',
                boxShadow: 'none'
            },
      },
      // Navbar button
      MuiTab: {
        root: {
          fontFamily: 'Raleway',
          fontWeight: '600',
          letterSpacing: 'normal',
          lineHeight: '1em',
          textTransform: 'none',
          minHeight: '0px'
        },
        textColorInherit: {
          color: dark_color,
          opacity: 1
        }
      },
    },
});


export default App;