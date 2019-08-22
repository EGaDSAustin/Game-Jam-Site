import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { browserHistory } from 'react-router';
import "./app.css";
import GlobalStyle from './components/styles.js';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import { TestForm } from "/forms"

import { Navbar } from './components/Navbar';
import { Title } from './components/Title';
import { InfoGrid } from './components/InfoGrid';
import { Register } from './components/Register';
import { Schedule } from './components/Schedule';
import { Games } from './components/Games';
import { Sponsors } from './components/Sponsors';
import { Footer } from './components/Footer';

const formUrl = "https://forms.gle/gDWmRyD17iM6np3f9"

class ScrollToTopOnMount extends React.Component {
    componentDidMount() {
      window.scrollTo(0, 0);
    }
  
    render() {     
      return null;
    }
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
                    <br/>
                    <center>
                        {/* <div id="about"><InfoGrid id="about" className="about"/></div> */}
                    </center>
                    <br/>
                        <div id='register'><Register/></div>
                    <br/>
                    
                    <br/>
                        <div id='schedule'><Schedule/></div>
                    <br/>
                        <div id='games'><Games/></div>
                    <br/>
                        <div id='sponsors'><Sponsors/></div>
                    
                    <Footer/>
                    </div>
                )}/>
                <Route path="/register" component={TestForm}/>
            </Switch>
            </Router>
            </MuiThemeProvider>
        );
    }
}

{/* class App extends Component {
  render() {
    return (<MuiThemeProvider theme={theme}>
      <div className="App">
        <header>
          <NavBar/>
          <br/><br/><br/>
        </header>
        <Route path="/" exact component={Splash}/>
        <Route path="/university" exact component={University}/>
        <Route path="/city" exact component={City}/>
        <Route path="/degree" exact component={Degree}/>
        <Route path="/about" component={About}/>
        <Route path="/degreeInstance" component={DegreeInstance}/>
        <Route path="/university/:id" component={UniversityInstance}/>
        <Route path="/city/:id" component={CityInstance}/>
        <Route path="/degree/:id" component={DegreeInstance}/>
        <Route path="/search" component={GlobalSearchResults}/>
      </div> 
      <Footer/>
      
    </MuiThemeProvider>);
  }
} */}


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
let light_green = '#968326'
let caption_color = '#494B4E';
let accent_color = '#E4C400';


// global style
const theme = createMuiTheme({
    typography: {
    //   fontFamily: 'Poppins',
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
      subtitle1: {
        fontFamily: 'Raleway',
        color: dark_color,
        fontSize: '18px',
        fontWeight: '600',
        letterSpacing: '0.05em',
        lineHeight: 'normal',
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
            }
      },
    }
    

});


export default App;