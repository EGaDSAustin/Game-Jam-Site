import React from 'react';
import { Card, Grid, Paper, Typography } from '@material-ui/core'


export class InfoGrid extends React.Component {
    render(){
        return(
        <Grid container spacing={3}>
            <Grid item xs={6} sm={3}>
                <Card>
                    <h1>Who</h1>
                    <br/>
                    <p>This event is hosted by EGaDS! The Electronic Game Developers Society is a student organization at UT Austin.</p>
                </Card>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Card>
                    <h1>What</h1>
                    <br/>
                    <p>UT Game Jam is a 36 hour event where participants work in teams to create a video game given a theme.</p>
                </Card>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Card>
                    <h1>Where</h1>
                    <br/>
                    <p>Multiple locations around The University of Texas at Austin. See schedule for more details!</p>    
                </Card>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Card>
                    <h1>Why</h1>
                    <br/>
                    <p>Learn new skills and/or hone existing ones while making your own game!</p>
                    <br/>
                </Card>
            </Grid>
        </Grid>
        );
    }
}
