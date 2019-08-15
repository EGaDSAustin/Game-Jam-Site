import React from 'react';
import { Link } from 'react-router-dom'
import { NavHashLink } from 'react-router-hash-link'

import AppBar from '@material-ui/core/AppBar';
import { Tabs, Tab, Toolbar } from '@material-ui/core';

import styled from 'styled-components'


const StyledTabs = styled(Tabs)`
    background: #100E23;
    color: white;
    font-weight: bold;
`

function ScrollToTop() {
    window.scrollTo({top: 0, behavior:'smooth'});
}

export class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    //NONCRITICAL TODO: Don't jump to home and scroll from register
    render() {
        return (
            <React.Fragment>
                <AppBar>
                    <StyledTabs centered>
                        <Tab value={0} label="Home" to="/" onClick={ScrollToTop} component={Link} />
                        <Tab value={1} label="About" to="/#about" smooth component={NavHashLink}/>
                        <Tab value={2} label="Schedule" to="/#schedule" smooth component={NavHashLink}/>
                        <Tab value={3} label="Games" to="/#games" smooth component={NavHashLink}/>
                        <Tab value={4} label="Sponsors" to="/#sponsors" smooth component={NavHashLink}/>
                        <Tab value={5} label="Register" to="register" component={Link}/>
                    </StyledTabs>
                </AppBar>
                <Toolbar />
            </React.Fragment>
        );
    }
}