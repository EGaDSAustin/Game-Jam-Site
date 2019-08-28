import React from 'react';
import { Link } from 'react-router-dom'
import { NavHashLink } from 'react-router-hash-link'

import AppBar from '@material-ui/core/AppBar';
import { Tabs, Tab, Toolbar, Container } from '@material-ui/core';
import styled from 'styled-components'
import icon from '../assets/mistletoe.PNG'


const StyledTabs = styled(Tabs)`
    background: transparent;
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
                <img src={icon} alt='navbar icon' style={{marginTop: '20px'}}/>
                    <StyledTabs centered style={{marginTop: '0'}} className="navbar">
                        <Tab value={0} label="Home" to="/" onClick={ScrollToTop} component={Link} />
                        <Tab value={1} label="About" to="/#about" smooth component={NavHashLink}/>
                        <Tab value={2} label="Register" to="/#register" smooth component={NavHashLink}/>
                        <Tab value={3} label="Schedule" to="/#schedule" smooth component={NavHashLink}/>
                        <Tab value={4} label="Games" to="/#games" smooth component={NavHashLink}/>
                        <Tab value={5} label="Sponsors" to="/#sponsors" smooth component={NavHashLink}/>
                    </StyledTabs>
            </React.Fragment>
        );
    }
}