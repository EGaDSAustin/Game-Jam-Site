import React from 'react';
import { Container, Typography } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles';
import fallingPeople from '../assets/fallingPeople.png'

export class Title extends React.Component {
    render() {
        return(

            <Container>
                {/* <div style="width: 804px; min-height: 125px; pointer-events: none; visibility: inherit;" data-min-height="125" class="title" id="TODO"> */}
                <div className="title">
                    <Typography variant="h1">UT Game Jam</Typography>
                    <Typography variant="h1">2019</Typography>
                </div>
                
                <Typography variant="subtitle1">September 20th</Typography>
                <Typography variant="subtitle1">36 hours</Typography>

                <img src = {fallingPeople} height = "100%" width = "100%"/>
                <Typography variant="h3">Come join us in making games,</Typography>
                <Typography variant="h3">friends, and memories!</Typography>
            </Container>
        );
    }
}