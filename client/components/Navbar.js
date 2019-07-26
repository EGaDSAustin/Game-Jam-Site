import React from 'react';
import { HashLink } from 'react-router-hash-link';

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
                    <Tab label="Home"/>
                    <Tab label="About"/>
                    <Tab label="Register"/>
                    <Tab label="Schedule"/>
                    <Tab label="Games"/>
                    <Tab label="Sponsors"/>
                </Tabs>
            </AppBar>
        );
    }
}