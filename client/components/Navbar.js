import React from 'react';
import { Link } from 'react-router-dom'
import { HashLink, NavHashLink } from 'react-router-hash-link'
import { Link as ScrollLink } from 'react-scroll'

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
                <AppBar>
                    <Tabs>
                        <Tab value={0} label="Home" to="/" component={Link} />
                        <Tab value={1} label="About" to="/#about" activeClassName="about" component={NavHashLink} smooth/>
                        <Tab value={2} label="Register" to="register" component={Link}/>
                        <Tab value={3} label="Schedule" to="/#schedule" component={NavHashLink} smooth/>
                        <Tab value={4} label="Games" to="/#games" component={NavHashLink} smooth/>
                        <Tab value={5} label="Sponsors" to="/#sponsors" component={NavHashLink} smooth/>
                    </Tabs>
                </AppBar>
                <Toolbar />
            </React.Fragment>
        );
    }
}