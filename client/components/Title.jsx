import React from 'react';
import { Container, Typography } from '@material-ui/core'
import fallingPeople from '../assets/fallingPeople.png'

import styled from 'styled-components'

const StyledContainer = styled(Container)`
    padding-top: 5%;
`;

const StyledTypography = styled(Typography)`
    color: #FDE8BD;
`;

export class Title extends React.Component {
    render() {
        return(
            <Container>
                <StyledTypography variant="h1" style={{fontSize: '60px'}} gutterBottom="true">
                    UT Game Jam 2019
                </StyledTypography>  
                <StyledTypography variant="h3" gutterBottom="true">
                    September 20th
                </StyledTypography>
                <StyledTypography variant="h3" gutterBottom="true">
                    36 Hours
                </StyledTypography>
                <img src = {fallingPeople} height = "100%" width = "100%"/>
                <StyledTypography variant="h4" gutterBottom="true" m={1}>
                    Come join us in making games, friends, and memories!
                </StyledTypography>
            </Container>
        );
    }
}