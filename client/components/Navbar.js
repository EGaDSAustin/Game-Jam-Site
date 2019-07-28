import React from 'react';
import * as Scroll from 'react-scroll';
import { Link } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar';
import { Tabs, Tab, Toolbar } from '@material-ui/core';

export class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AppBar position='sticky'>
                <Tabs>
                    <Tab value={0} label="Home" to="/" component={Link}/>
                    <Tab value={1} label="About"/>
                    <Tab value={2} label="Register" to="/form" component={Link}/>
                    <Tab value={3} label="Schedule"/>
                    <Tab value={4} label="Games"/>
                    <Tab value={5} label="Sponsors"/>
                </Tabs>
            </AppBar>
        );
    }
}