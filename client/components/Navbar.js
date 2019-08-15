import React from 'react';
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import AppBar from '@material-ui/core/AppBar';
import { Tabs, Tab, Toolbar } from '@material-ui/core';

import styled from 'styled-components'


const StyledTabs = styled(Tabs)`
    background: #F5B031;
    color: black;
    font-weight: bold;
`

export class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <AppBar elevation={0}>
                    <StyledTabs centered>
                        <Tab value={0} label="Home" to="/" component={Link}/>
                        <Tab value={1} label="About" to="/#about" component={Link}/>
                        <Tab value={2} label="Register" to="register" component={Link}/>
                        <Tab value={3} label="Schedule" to="/#schedule" component={Link}/>
                        <Tab value={4} label="Games" to="/#games" component={Link}/>
                        <Tab value={5} label="Sponsors" to="/#sponsors" component={Link}/>
                    </StyledTabs>
                </AppBar>
                <Toolbar />
            </React.Fragment>
        );
    }
}