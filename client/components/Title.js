import React from 'react';
import { Container, Typography } from '@material-ui/core'
import fallingPeople from '../assets/fallingPeople.png'

import styled from 'styled-components'

const StyledContainer = styled(Container)`
    padding-top: 5%;
`;

export class Title extends React.Component {
    render() {
        return(
            <Container>
                <Typography variant="h1" style={{fontSize: '60px'}} gutterBottom="true">
                    UT Game Jam 2019
                </Typography>  
                <Typography variant="h3" gutterBottom="true">
                    September 20th
                </Typography>
                <Typography variant="h3" gutterBottom="true">
                    36 Hours
                </Typography>
                <img src = {fallingPeople} height = "100%" width = "100%"/>
                <Typography variant="h4" gutterBottom="true" m={1}>
                    Come join us in making games, friends, and memories!
                </Typography>
            </Container>
        );
    }
}