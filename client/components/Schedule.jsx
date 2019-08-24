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
    header: {
        padding: '20px'
    },
    date: {
      marginLeft: '5px',
      marginBottom: '20px',
      textAlign: 'left',
    //   width: '52px',
      color: 'white'
    },
    time: {
        marginLeft: '25px',
        width: '82px',
        textAlign: 'center',
        marginTop: '15px',
        fontSize: '23px'
    },
    description: {
        width: '187px',
        height: '80px',
        marginLeft: '50px',
        marginTop: '20px',
        textAlign: 'left'
    },
    container: {
        backgroundColor: 'white', 
        paddingLeft: '0px', 
        paddingRight: '0px', 
        paddingBottom: '20px',
        width: '369px', 
        marginLeft: '0px',
        maxWidth: '369px'
        // flexWrap: 'nowrap'
    }
  };

export class Schedule extends React.Component {
    render(){
        return(
            <StyledContainer maxWidth = "xl" align="center" >
                <Typography variant="h2" color='secondary' id="schedule" style={styles.header}>Schedule</Typography>

                {/* TODO: the schedules may not be centered. also refactor code */}
                <Grid container spacing = {5} style={{flexWrap: 'nowrap', marginLeft: '20px',  align: 'center', width:'80%'}}>
                    <Grid item  xs = {6} sm = {6}>
                        <Typography variant="h3" gutterBottom style={styles.date}>// Friday, Sept 20</Typography>
                        <Container style={styles.container}>
                            <Grid container spacing = {3} alignItems = "left" alignContent="center">
                                <Grid item xs = {3}>
                                    <Typography variant="h4" style={styles.time}>4:00 - 8:00 pm</Typography>
                                    {/* <StyledTimes variant = "h4" align = "right"> 11:00 am </StyledTimes> */}
                                </Grid>
                                <Grid item xs = {9}>
                                    <Typography variant = "body1" style={styles.description}>Sponsor and Student Mixer: Past games showcase, tabling, refreshments, jackbox/other icebreakers</Typography>
                                </Grid>

                                <Grid item xs = {3}>
                                    <Typography variant="h4" style={styles.time}>5:00 pm</Typography>
                                </Grid>
                                <Grid item xs = {9}>
                                    <Typography variant = "body1" style={styles.description}> Opening remarks </Typography>
                                </Grid>

                                <Grid item xs = {3}>
                                    <Typography variant="h4" style={styles.time}>5:15 pm</Typography>
                                </Grid>
                                <Grid item xs = {9}>
                                    <Typography variant = "body1" style={styles.description}> Theme reveal and official start of the game jam! </Typography>
                                </Grid>

                                <Grid item xs = {3}>
                                    <Typography variant="h4" style={styles.time}>5:15 - 6:00 pm </Typography>
                                </Grid>
                                <Grid item xs = {9}>
                                    <Typography variant = "body1" style={styles.description}>“How to Have a Successful Game Jam” Panel </Typography>
                                </Grid>

                                <Grid item xs = {3}>
                                    <Typography variant="h4" style={styles.time}>6:00 - 7:00 pm </Typography>
                                </Grid>
                                <Grid item xs = {9}>
                                    <Typography variant = "body1" style={styles.description}>Sponsor/EGaDS workshop slot</Typography>
                                </Grid>

                                <Grid item xs = {3}>
                                    <Typography variant="h4" style={styles.time}>1:00 am </Typography>
                                </Grid>
                                <Grid item xs = {9}>
                                    <Typography variant = "body1" style={styles.description}>Building closes</Typography>
                                </Grid>
                            </Grid>
                            </Container>
                    </Grid>

                    <Grid item  xs = {12} sm = {6}>
                        <Typography variant="h3" gutterBottom style={styles.date}>// Saturday, Sept 21</Typography>
                        <Container style={styles.container}>
                            <Grid container spacing = {3} alignItems = "left">
                                <Grid item xs = {3}>
                                    <Typography variant="h4" style={styles.time}>10:00 am</Typography>
                                </Grid>
                                <Grid item xs = {9}>
                                    <Typography variant = "body1" style={styles.description}>Building opens and breakfast is served</Typography>
                                </Grid>

                                <Grid item xs = {3}>
                                    <Typography variant="h4" style={styles.time}>11:00 - 12:00 pm</Typography>
                                </Grid>
                                <Grid item xs = {9}>
                                    <Typography variant = "body1" style={styles.description}>Sponsor/EGaDS workshop slot</Typography>
                                </Grid>

                                <Grid item xs = {3}>
                                    <Typography variant="h4" style={styles.time}>12:00 - 1:00 pm</Typography>
                                </Grid>
                                <Grid item xs = {9}>
                                    <Typography variant = "body1" style={styles.description}>Sponsor/EGaDS workshop slot</Typography>
                                </Grid>

                                <Grid item xs = {3}>
                                    <Typography variant="h4" style={styles.time}>1:00 pm </Typography>
                                </Grid>
                                <Grid item xs = {9}>
                                    <Typography variant = "body1" style={styles.description}> Lunch is served </Typography>
                                </Grid>

                                <Grid item xs = {3}>
                                    <Typography variant="h4" style={styles.time}>2:00 - 3:00 pm</Typography>
                                </Grid>
                                <Grid item xs = {9}>
                                    <Typography variant = "body1" style={styles.description}>Sponsor/EGaDS workshop slot</Typography>
                                </Grid>

                                <Grid item xs = {3}>
                                    <Typography variant="h4" style={styles.time}>7:00 pm </Typography>
                                </Grid>
                                <Grid item xs = {9}>
                                    <Typography variant = "body1" style={styles.description}> Dinner is served </Typography>
                                </Grid>

                                <Grid item xs = {3}>
                                    <Typography variant="h4" style={styles.time}>1:00 am </Typography>
                                </Grid>
                                <Grid item xs = {9}>
                                    <Typography variant = "body1" style={styles.description}> Building closes (Sleep and shower) </Typography>
                                </Grid>
                            </Grid>
                            </Container>
                    </Grid>

                    <Grid item  xs = {12} sm = {6}>
                        <Typography variant="h3" gutterBottom style={styles.date}>// Sunday, Sept 22</Typography>
                        <Container style={styles.container}>
                            <Grid container spacing = {3} alignItems = "left">
                                <Grid item xs = {3}>
                                    <Typography variant="h4" style={styles.time}>12:00 pm</Typography>
                                </Grid>
                                <Grid item xs = {9}>
                                    <Typography variant = "body1" style={styles.description}> Building re-opens </Typography>
                                </Grid>

                                <Grid item xs = {3}>
                                    <Typography variant="h4" style={styles.time}>1:00 pm</Typography>
                                </Grid>
                                <Grid item xs = {9}>
                                    <Typography variant = "body1" style={styles.description}> Submissions are due on itch.io, Lunch is served </Typography>
                                </Grid>

                                <Grid item xs = {3}>
                                    <Typography variant="h4" style={styles.time}>1:15 - 2:30 pm</Typography>
                                </Grid>
                                <Grid item xs = {9}>
                                    <Typography variant = "body1" style={styles.description}>Judging</Typography>
                                </Grid>

                                <Grid item xs = {3}>
                                    <Typography variant="h4" style={styles.time}>2:30 pm </Typography>
                                </Grid>
                                <Grid item xs = {9}>
                                    <Typography variant = "body1" style={styles.description}> Awards and final remarks </Typography>
                                </Grid>
                            </Grid>
                            </Container>
                    </Grid>
                </Grid>
            </StyledContainer>
        )
    }
}