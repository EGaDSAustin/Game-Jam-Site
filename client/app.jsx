import React from 'react';
import "./app.css"

import AppBar from '@material-ui/core/AppBar';
import { Button, Container, Tabs, Tab, Toolbar } from '@material-ui/core';
import { Navbar } from './components/Navbar';
import { InfoGrid } from './components/InfoGrid'

const formUrl = "https://forms.gle/gDWmRyD17iM6np3f9"

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
                <InfoGrid/>
                <br/>
                <div>
                    <Button variant="contained" color="primary">
                        Click Here to Register!
                    </Button>
                </div>
                <img src="http://dancesportlive.net/dsl/images/under_construction.gif" />
                </Container>
            </div>
        );
    }
}

export default App;