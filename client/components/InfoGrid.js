import React from 'react';
import { Card, Divider, Grid, Paper, Typography } from '@material-ui/core'


export class InfoGrid extends React.Component {
    render(){
        return(
        <Grid container spacing={3}>
            <Grid item xs={6} sm={3}>
                <Card>
                    <Typography variant="h5" align="center" gutterBottom="true">
                        Who
                    </Typography>
                    <Divider/>
                    <Typography variant="body1" align="center" paragraph="true">
                        This event is hosted by EGaDS! The Electronic Game Developers Society is a student organization at UT Austin.
                    </Typography>
                </Card>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Card>
                    <Typography variant="h5" align="center" gutterBottom="true">
                        What
                    </Typography>
                    <Divider/>
                    <Typography variant="body1" align="center" paragraph="true">
                        UT Game Jam is a 36 hour event where participants work in teams to create a video game given a theme.
                    </Typography>
                </Card>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Card>
                    <Typography variant="h5" align="center" gutterBottom="true">
                        Where
                    </Typography>
                    <Divider/>
                    <Typography variant="body1" align="center" paragraph="true">
                        Multiple locations around The University of Texas at Austin. See schedule for more details!
                    </Typography>    
                </Card>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Card>
                    <Typography variant="h5" align="center" gutterBottom="true">
                        Why
                    </Typography>
                    <Divider/>
                    <Typography variant="body1" align="center" paragraph="true">
                        Learn new skills and/or hone existing ones while making your own game!
                        <br/>
                    </Typography>
                </Card>
            </Grid>
        </Grid>
        );
    }
}
