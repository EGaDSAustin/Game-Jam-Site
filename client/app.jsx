import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { browserHistory } from 'react-router';
// import "./app.css"
import GlobalStyle from './components/styles.js';
import { TestForm } from "/forms.jsx"

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
                        <div id="about"><InfoGrid id="about" className="about"/></div>
                    </center>
                    
                    
                    <br/>
                        <div id='schedule'><Schedule/></div>
                    <br/>
                        <div id='games'><Games/></div>
                    <br/>
                        <div id='sponsors'><Sponsors/></div>
                    <br/>
                        <div id='register'><Register/></div>
                    <br/>
                    <Footer/>
                    </div>
                )}/>
                <Route path="/register" component={TestForm}/>
            </Switch>
            </Router>
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

export default App;