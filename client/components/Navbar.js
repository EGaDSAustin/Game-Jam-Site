import React from 'react';
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import AppBar from '@material-ui/core/AppBar';
import { Tabs, Tab, Toolbar } from '@material-ui/core';

export class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <AppBar>
                    <Tabs>
                        <Tab value={0} label="Home" to="/" component={Link}/>
                        <Tab value={1} label="About" to="/#about" component={Link}/>
                        <Tab value={2} label="Register" to="register" component={Link}/>
                        <Tab value={3} label="Schedule" to="/#schedule" component={Link}/>
                        <Tab value={4} label="Games" to="/#games" component={Link}/>
                        <Tab value={5} label="Sponsors" to="/#sponsors" component={Link}/>
                    </Tabs>
                </AppBar>
                <Toolbar />
            </React.Fragment>
        );
    }
}