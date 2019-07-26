import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollableAnchor from 'react-scrollable-anchor'
import "./app.css"
import TestForm from "./forms.jsx"

import AppBar from '@material-ui/core/AppBar';
import { Button, Container, Tabs, Tab, Toolbar } from '@material-ui/core';
import { Navbar } from './components/Navbar';
import { Title } from './components/Title';
import { InfoGrid } from './components/InfoGrid';
import { Register } from './components/Register';
import { Schedule } from './components/Schedule';
import { Games } from './components/Games';
import { Sponsors } from './components/Sponsors';
import { Footer } from './components/Footer';

const formUrl = "https://forms.gle/gDWmRyD17iM6np3f9"

class App extends React.Component {
    render() {

        return (
            <Router>
            <div className='main'>
                <Navbar/>
                <br/>
                <Title id='title'/>
                <br/>
                <InfoGrid id='about'/>
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
            </Router>
        );
    }
}

export default App;