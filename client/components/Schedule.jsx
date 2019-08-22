import React from 'react';
import { Typography, Container, Grid, Card } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import LazyLoad from 'react-lazyload';

import styled from 'styled-components';

const StyledCard = styled(Card)`
    padding-top: 10%;
    padding-bottom: 10%;
    && { background: #FDE8BD };
`;

const StyledContainer = styled(Container)`
    padding-top: 5%;
`;

const StyledTypography = styled(Typography)`
    color: white;
    && { font-weight: bold };
`;

const StyledTimes = styled(Typography)`
    color: #DD8023;
    padding-left: 20%;
    padding-right: 20%;
    && { font-size: 200% };
`

const styles = {
    date: {
      marginLeft: '5px',
      marginBottom: '20px',
      textAlign: 'left',
      color: 'white'
    },
    time: {
        marginLeft: '25px',
        width: '82px',
        textAlign: 'center',
        marginTop: '15px'
    },
    description: {
        width: '187px',
        height: '90px',
        marginLeft: '50px',
        marginTop: '25px',
        textAlign: 'left'
    },
    container: {
        backgroundColor: 'white', 
        paddingLeft: '0px', 
        paddingRight: '0px', 
        paddingBottom: '20px',
        width: '369px', 
        marginLeft: '0px'
    }
  };

export class Schedule extends React.Component {
    render(){
        return(
            <StyledContainer maxWidth = "md">
                <Typography variant="h2" color='secondary'>Schedule</Typography>
                
                <br/>

                {/* TODO: fix so that the schedules are further apart. Grid container spacing 10 is already max */}
                <Grid container spacing = {10}>
                        <Grid item  xs = {12} sm = {6}>
                            <Typography variant="h3" gutterBottom style={styles.date}>// Saturday, Sept 15</Typography>
                            <Container style={styles.container}>
                                <Grid container spacing = {3} alignItems = "left">
                                    <Grid item xs = {3}>
                                        <Typography variant="h4" style={styles.time}>11:00 am</Typography>
                                        {/* <StyledTimes variant = "h4" align = "right"> 11:00 am </StyledTimes> */}
                                    </Grid>
                                    <Grid item xs = {9}>
                                        <Typography variant = "body1" style={styles.description}> Doors open and team matchmaking begins </Typography>
                                    </Grid>

                                    <Grid item xs = {3}>
                                        <Typography variant="h4" style={styles.time}>11:30 am</Typography>
                                    </Grid>
                                    <Grid item xs = {9}>
                                        <Typography variant = "body1" style={styles.description}> Short introductory presentation </Typography>
                                    </Grid>

                                    <Grid item xs = {3}>
                                        <Typography variant="h4" style={styles.time}>12:00 pm</Typography>
                                    </Grid>
                                    <Grid item xs = {9}>
                                        <Typography variant = "body1" style={styles.description}> Theme reveal and official start of the game jam! </Typography>
                                    </Grid>

                                    <Grid item xs = {3}>
                                        <Typography variant="h4" style={styles.time}>3:00 am </Typography>
                                    </Grid>
                                    <Grid item xs = {9}>
                                        <Typography variant = "body1" style={styles.description}> SAC (Student Activity Center) closes </Typography>
                                    </Grid>
                                </Grid>
                                </Container>
                        </Grid>

                        <Grid item  xs = {12} sm = {6}>
                            <Typography variant="h3" gutterBottom style={styles.date}>// Saturday, Sept 15</Typography>
                            <Container style={styles.container}>
                                <Grid container spacing = {3} alignItems = "left">
                                    <Grid item xs = {3}>
                                        <Typography variant="h4" style={styles.time}>11:00 am</Typography>
                                    </Grid>
                                    <Grid item xs = {9}>
                                        <Typography variant = "body1" style={styles.description}> Doors open and team matchmaking begins </Typography>
                                    </Grid>

                                    <Grid item xs = {3}>
                                        <Typography variant="h4" style={styles.time}>11:30 am</Typography>
                                    </Grid>
                                    <Grid item xs = {9}>
                                        <Typography variant = "body1" style={styles.description}> Short introductory presentation </Typography>
                                    </Grid>

                                    <Grid item xs = {3}>
                                        <Typography variant="h4" style={styles.time}>12:00 pm</Typography>
                                    </Grid>
                                    <Grid item xs = {9}>
                                        <Typography variant = "body1" style={styles.description}> Theme reveal and official start of the game jam! </Typography>
                                    </Grid>

                                    <Grid item xs = {3}>
                                        <Typography variant="h4" style={styles.time}>3:00 am </Typography>
                                    </Grid>
                                    <Grid item xs = {9}>
                                        <Typography variant = "body1" style={styles.description}> SAC (Student Activity Center) closes </Typography>
                                    </Grid>
                                </Grid>
                                </Container>
                        </Grid>
                </Grid>
            </StyledContainer>
        )
    }
}