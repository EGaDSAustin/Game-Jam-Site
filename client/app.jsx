import React from 'react';
import "./app.css"
import TestForm from "./forms.jsx"

import AppBar from '@material-ui/core/AppBar';
import { Button, Container, Tabs, Tab, Toolbar } from '@material-ui/core';
import { Navbar } from './components/Navbar';
import { InfoGrid } from './components/InfoGrid';
import { Footer } from './components/Footer';
import { Title } from './components/Title'
import { Sponsors } from './components/Sponsors'

const formUrl = "https://forms.gle/gDWmRyD17iM6np3f9"

class App extends React.Component {
    render() {

        return (
            <div className='main'>
                <Navbar/>
                <Container>
                    <Title/>
                    <InfoGrid/>
                    <br/>
                    <div>
                        <Button variant="contained" color="primary">
                            Click Here to Register!
                        </Button>
                    </div>
                    <img src="http://dancesportlive.net/dsl/images/under_construction.gif" />
                </Container>
                <Sponsors/>
                <Footer/>
            </div>
            

        );
    }
}

export default App;