import React from 'react';
import { Container, Typography } from '@material-ui/core'
import fallingPeople from '../assets/fallingPeople.png';
import InfoCard from './InfoCard.jsx';
import Grid from '@material-ui/core/Grid';
import whoImage from '../assets/infoGrid/can.png';
import whatImage from '../assets/infoGrid/phone.png';
import whereImage from '../assets/infoGrid/pen.png';
import whyImage from '../assets/infoGrid/keyboard.png';
import RegisterImage from '../assets/raccoon.png';

export class Title extends React.Component {
    render() {
        return (
            <Container>
                {/* zIndex shows stack position, must have position set to work */}
                <div className="title" style={{ marginBottom: '20px', zIndex: '6', position: 'relative' }}>
                    <Typography variant="h1" >UT Game Jam</Typography>
                    <Typography variant="h1">2019</Typography>
                </div>

                {/* zIndex shows stack position, must have position set to work */}
                <div className="title_description" style={{ zIndex: '6', position: 'relative' }}>
                    <Typography variant="subtitle1">September 20th - 22nd</Typography>
                    <Typography variant="subtitle1">36 hours</Typography>
                </div>

                <img src={fallingPeople} height="100%" width="100%" position="relative" style={{ marginTop: '-100px', zIndex: '0' }} />

                <Typography variant="h3" style={{ paddingTop: '40px' }} id="about">Come join us in making games,</Typography>
                <Typography variant="h3">friends, and memories!</Typography>
                <Grid container spacing={9}>
                    <Grid item xs={6}>
                        <InfoCard
                            category='Who?'
                            photo={whoImage} alt_text='who_image'
                            description={
                                <div>
                                    <Typography variant="subtitle1">This event is hosted by <a href="https://www.facebook.com/groups/egadsaustin/">EGaDS!,</a> a student</Typography>
                                    <Typography variant="subtitle1">organization dedicated to fostering</Typography>
                                    <Typography variant="subtitle1">game development on UT campus. </Typography>
                                    <Typography variant="subtitle1">It's open to all skill levels</Typography>
                                    <Typography variant="subtitle1">and is free to attend!</Typography>
                                </div>
                            } /></Grid>
                    <Grid item xs={6}>
                        <InfoCard
                            category='What?'
                            photo={whatImage} alt_text='what_image'
                            description="UT Game Jam is a 36 hour event where\nparticipants make a game in teams mentored by\n professional game developers from studios\n like Niantic, EA, and Magic Leap!" />
                    </Grid></Grid>

                <Grid container spacing={4} justify="center" id="register">
                    <Grid item xs={5}>
                        <InfoCard
                            category='Where?'
                            photo={whereImage} alt_text='where_image' />
                        <Typography variant="subtitle1">
                            The Gates Dell Complex<br></br>
                            on UT Campus, <a href="https://goo.gl/maps/whe5uybbCj3dgqXb9">Directions</a><br></br>
                            Paid Parking nearby in <a href="https://goo.gl/maps/BLni2uaJADtcnnt38">Brazos</a><br></br>
                            or <a href="https://goo.gl/maps/6QeBMJRLgiVfFpLCA">San Jacinto Garages</a>
                        </Typography>
                    </Grid>
                    <Grid item xs={5}>
                        <InfoCard
                            category='Why?'
                            photo={whyImage} alt_text='why_image'
                            description="Better your game development skills\nadd to or begin your portfolio, and \nconnect with your student team \nand industry mentor." />
                    </Grid></Grid>
                <img src={RegisterImage} alt='register image' style={{ maxWidth: '100%', width: 'auto', position: 'relative', top: '-150px', marginBottom: '-150px' }} />
            </Container>
        );
    }
}