import React from 'react';
import { Container, Typography } from '@material-ui/core'
import fallingPeople from '../assets/fallingPeople2.png';
import InfoCard from './InfoCard.jsx';
import Grid from '@material-ui/core/Grid';
import whoImage from '../assets/infoGrid/can.png';
import whatImage from '../assets/infoGrid/phone.png';
import whereImage from '../assets/infoGrid/pen.png';
import whyImage from '../assets/infoGrid/keyboard.png';
import RegisterImage from '../assets/temp_elf_handstand.png';

export class Title extends React.Component {
    render() {
        return(
            <Container>
                {/* zIndex shows stack position, must have position set to work */}
                <div className="title" style={{marginBottom: '20px', zIndex: '6', position: 'relative'}}>
                    <Typography variant="h1" >UT Game Jam</Typography>
                    <Typography variant="h1">2019</Typography>
                </div>

                {/* zIndex shows stack position, must have position set to work */}
                <div className="title_description" style={{zIndex: '6', position: 'relative'}}>
                    <Typography variant="subtitle1">September 20th</Typography>
                    <Typography variant="subtitle1">36 hours</Typography>
                </div>
                
                <img src = {fallingPeople} height = "100%" width = "100%" position="relative" style={{marginTop: '-100px', zIndex: '0'}}/>
                
                <Typography variant="h3" style={{paddingTop: '40px'}} id="about">Come join us in making games,</Typography>
                <Typography variant="h3">friends, and memories!</Typography>
                <Grid container spacing={9}>
                    <Grid item xs={6}>
                        <InfoCard
                            category='Who?'
                            photo={whoImage} alt_text='who_image'
                            description= {
                                <div>
                                    <Typography variant="subtitle1">This event is hosted by <a href="https://www.facebook.com/groups/egadsaustin/">EGaDS!</a></Typography>
                                    <Typography variant="subtitle1">The Electronic Game Developers Society</Typography>
                                    <Typography variant="subtitle1">is a student organization at UT Austin.</Typography>
                                </div>
                            }/></Grid>
                        <Grid item xs={6}>
                            <InfoCard
                                category='What?'
                                photo={whatImage} alt_text='what_image'
                                description= "UT Game Jam is a 36 hour event where\nparticipants work in teams to create a\nvideo game given a theme."/>
                </Grid></Grid>
                
                <Grid container spacing={4} justify="center" id="register">
                    <Grid item xs={5}>
                    <InfoCard
                        category='Where?'
                        photo={whereImage} alt_text='where_image'
                        description= "Multiple locations around\nThe University of Texas at\nAustin. See schedule for\nmore details!"/></Grid>
                    <Grid item xs={5}>
                    <InfoCard
                        category='Why?'
                        photo={whyImage} alt_text='why_image'
                        description= "Learn new skills and/or\nhone existing ones\nwhile making your own\ngame!"/>
                </Grid></Grid>
                  <img src = {RegisterImage} alt='register image' style={{maxWidth: '100%', width: 'auto', position: 'relative', top: '-150px', marginBottom: '-150px'}}/>
            </Container>
        );
    }
}