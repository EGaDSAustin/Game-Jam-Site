import React from 'react';
import { Container, Typography } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles';
import fallingPeople from '../assets/fallingPeople.png';
import InfoCard from './InfoCard.jsx';
import Grid from '@material-ui/core/Grid';
import whoImage from '../assets/circleMusic.png';
import whatImage from '../assets/circleMusic.png';
import whereImage from '../assets/circleMusic.png';
import whyImage from '../assets/circleMusic.png';
import RegisterImage from '../assets/temp_elf_handstand.JPG';

const styles = {
  image: {
    marginTop: '15px',
    height: '200px',
    width: 'auto',
  }
};

export class Title extends React.Component {
    render() {
        return(

            <Container>
                {/* <div style="width: 804px; min-height: 125px; pointer-events: none; visibility: inherit;" data-min-height="125" class="title" id="TODO"> */}
                <div className="title" style={{marginBottom: '20px'}}>
                    <Typography variant="h1" >UT Game Jam</Typography>
                    <Typography variant="h1">2019</Typography>
                </div>
                
                <Typography variant="subtitle1">September 20th</Typography>
                <Typography variant="subtitle1">36 hours</Typography>

                <img src = {fallingPeople} height = "100%" width = "100%"/>
                <Typography variant="h3" style={{paddingTop: '50px'}} id="about">Come join us in making games,</Typography>
                <Typography variant="h3">friends, and memories!</Typography>
                <Grid container spacing={9}>
                    <Grid item xs={6}>
                        <InfoCard
                            category='Who?'
                            photo={whoImage} alt_text='who_image'
                            description= {
                                <div>
                                    <Typography variant="subtitle1">This event is hosted by <a href="https://test-egads-website.herokuapp.com/">EGaDS!</a></Typography>
                                    <Typography variant="subtitle1">The Electronic Game Developers Society</Typography>
                                    <Typography variant="subtitle1">is a student organization at UT Austin.</Typography>
                                </div>
                            }/></Grid>
                        <Grid item xs={6}>
                        <InfoCard
                            category='What?'
                            photo={whatImage} alt_text='what_image'
                            description= "UT Game Jam is a 36 hour event where\nparticipants work in teams to create a\nvideo game given a theme."/>
                        {/* <div className="infoCard">
                            <img src={whoImage} alt='who_image' style={styles.image}/>
                            <Typography variant="h2">Who?</Typography>
                            <Typography variant="subtitle1">This event is hosted by <a href="https://test-egads-website.herokuapp.com/">EGaDS!</a></Typography>
                            <Typography variant="subtitle1">The Electronic Game Developers Society is a student organization at UT Austin.</Typography>
                        </div> */}
                        </Grid>
                    </Grid>
                
                <Grid container spacing={4} justify="center">
                    <Grid item xs={5}>
                    <InfoCard
                        category='Where?'
                        photo={whereImage} alt_text='where_image'
                        description= "Multiple locations around\nThe University of Texas at\nAustin. See schedule for\nmore details!"/></Grid>
                    <Grid item xs={5}>
                    <InfoCard
                        category='Why?'
                        photo={whyImage} alt_text='why_image'
                        description= "Learn new skills and/or\nhone existing ones\nwhile making your own\ngame!"/></Grid>
                </Grid>
                  <img src = {RegisterImage} alt='register image' style={{maxWidth: '100%', width: 'auto', position: 'relative', top: '-150px', marginBottom: '-150px'}}/>
            </Container>
        );
    }
}