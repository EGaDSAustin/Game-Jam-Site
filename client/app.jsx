import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { browserHistory } from 'react-router';
import "./app.css"
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
            history={browserHistory}>
            <Navbar/>
            <Switch>
                <Route exact path="/" render={routeProps => (
                    <div className='main'>
                    <ScrollToTopOnMount/>
                    <br/>
                    <Title id='title'/>
                    <br/>
                    <InfoGrid id="about"/>
                    <br/>
                    <Register id='register'/>
                    <br/>
                    <img src="http://dancesportlive.net/dsl/images/under_construction.gif" />
                    <br/>
                    <Schedule id='schedule'/>
                    <br/>
                    <Games id='games'/>
                    <br/>
                    <Sponsors id='sponsors'/>
                    <br/>
                    <Footer/>
                    </div>
                )}/>
                <Route path="/form" component={TestForm}/>
            </Switch>
            </Router>
        );
    }
}

export default App;