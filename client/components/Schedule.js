import React from 'react';
import { Typography, Container, Grid, Card } from '@material-ui/core';
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
    font-weight: bold;
`;


export class Schedule extends React.Component {
    render(){
        return(
            <StyledContainer maxWidth = "md">
                
                <Typography variant = "h3" align = "center">
                    Schedule 
                </Typography>
                
                <br/>

                <Grid container spacing = {10}>
                    <Grid item  xs = {12} sm = {6}>
                        <StyledTypography variant = "h5" align = "left"> // Saturday, Sept 15 </StyledTypography>
                        <StyledCard>
                            <Grid container spacing = {3} alignItems = "center">
                                <Grid item xs = {3}>
                                    <Typography variant = "h5"> 11:00 am </Typography>
                                </Grid>
                                <Grid item xs = {9}>
                                    <Typography variant = "body1" align = "left"> Doors open and team matchmaking begins </Typography>
                                </Grid>

                                <Grid item xs = {3}>
                                    <Typography variant = "h5"> 11:30 am </Typography>
                                </Grid>
                                <Grid item xs = {9}>
                                    <Typography variant = "body1" align = "left"> Short introductory presentation </Typography>
                                </Grid>

                                <Grid item xs = {3}>
                                    <Typography variant = "h5"> 12:00 pm </Typography>
                                </Grid>
                                <Grid item xs = {9}>
                                    <Typography variant = "body1" align = "left"> Theme reveal and official start of the game jam! </Typography>
                                </Grid>

                                <Grid item xs = {3}>
                                    <Typography variant = "h5"> 3:00 am </Typography>
                                </Grid>
                                <Grid item xs = {9}>
                                    <Typography variant = "body1" align = "left"> SAC (Student Activity Center) closes </Typography>
                                </Grid>
                            </Grid>
                        </StyledCard>
                    </Grid>
                    
                    <Grid item  xs = {12} sm = {6}> 
                        <StyledTypography variant = "h5" align = "left"> // Sunday, Sept 16 </StyledTypography>
                        <StyledCard>
                            <Grid container spacing = {3} alignItems = "center">
                                <Grid item xs = {3}>
                                    <Typography variant = "h5"> 11:00 am </Typography>
                                </Grid>
                                <Grid item xs = {9}>
                                    <Typography variant = "body1" align = "left"> Doors open and team matchmaking begins </Typography>
                                </Grid>

                                <Grid item xs = {3}>
                                    <Typography variant = "h5"> 11:30 am </Typography>
                                </Grid>
                                <Grid item xs = {9}>
                                    <Typography variant = "body1" align = "left"> Short introductory presentation </Typography>
                                </Grid>

                                <Grid item xs = {3}>
                                    <Typography variant = "h5"> 12:00 pm </Typography>
                                </Grid>
                                <Grid item xs = {9}>
                                    <Typography variant = "body1" align = "left"> Theme reveal and official start of the game jam! </Typography>
                                </Grid>

                                <Grid item xs = {3}>
                                    <Typography variant = "h5"> 3:00 am </Typography>
                                </Grid>
                                <Grid item xs = {9}>
                                    <Typography variant = "body1" align = "left"> SAC (Student Activity Center) closes </Typography>
                                </Grid>
                            </Grid>
                        </StyledCard>
                    </Grid>
                </Grid>
            
            </StyledContainer>
        )
    }
}