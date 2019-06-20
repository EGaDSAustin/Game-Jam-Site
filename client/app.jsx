import React from 'react';
import "./app.css"

import AppBar from '@material-ui/core/AppBar';
import { Tabs, Tab, Toolbar, Container } from '@material-ui/core';
import { Navbar } from './components/Navbar';

class App extends React.Component {
    render() {
        return (
            <div className='main'>
                <Navbar/>
                <Container>
                <div className='Title Logo'>
                    <h1 style={{fontSize:'60px'}}> UT Game Jam<br/>2019 </h1>
                    <h2>September 20th</h2>
                    <h2>36 hours</h2>
                    <img src="https://cdn.theatlantic.com/static/mt/assets/science/cat_caviar.jpg"/>
                    <h1>Come join us in making games, friends, and memories!</h1>
                </div>
                
                <img src="http://dancesportlive.net/dsl/images/under_construction.gif" />
                </Container>
            </div>
        );
    }
}

export default App;