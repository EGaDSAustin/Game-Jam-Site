import React from 'react';
import { Container, Typography } from '@material-ui/core'

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
                <img src="https://cdn.theatlantic.com/static/mt/assets/science/cat_caviar.jpg"/>
                <Typography variant="h4" gutterBottom="true" m={1}>
                    Come join us in making games, friends, and memories!
                </Typography>
            </Container>
            // <div className='Title Logo'>
            //     <h1 style={{fontSize:'60px'}}> UT Game Jam<br/>2019 </h1>
            //     <h2>September 20th</h2>
            //     <h2>36 hours</h2>
            //     <img src="https://cdn.theatlantic.com/static/mt/assets/science/cat_caviar.jpg"/>
            //     <h1>Come join us in making games, friends, and memories!</h1>
            // </div>
        );
    }
}