import React from 'react';
import { Container, Typography } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles';
import fallingPeople from '../assets/fallingPeople.png';
import InfoCard from './InfoCard.jsx';
import Grid from '@material-ui/core/Grid';
import whoImage from '../assets/circleMusic.png';
import RegisterImage from '../assets/temp_elf_handstand.JPG';

const styles = {
  card: {
    maxWidth: '100%'
  },
  media: {
    height: 420,
    width: 300
  },
  textSpacing: {
    marginBottom: '10px'
  },
  cardMedia: {
    align: 'center'
  },
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
                <div className="title">
                    <Typography variant="h1">UT Game Jam</Typography>
                    <Typography variant="h1">2019</Typography>
                </div>
                
                <Typography variant="subtitle1">September 20th</Typography>
                <Typography variant="subtitle1">36 hours</Typography>

                <img src = {fallingPeople} height = "100%" width = "100%"/>
                <Typography variant="h3">Come join us in making games,</Typography>
                <Typography variant="h3">friends, and memories!</Typography>
                <div className="infoRow">
                {/* <InfoCard
                            category='Who?'
                            photo={whoImage}
                            alt_text='who_image'
                            description="This event is hosted by EGaDS! The Electronic Game Developers Society is a student organization at UT Austin.">
                        </InfoCard> */}
                    <div className="infoCard">
                        <img src={whoImage} alt='who_image' style={styles.image}/>
                        <Typography variant="h2">Who?</Typography>
                        <Typography variant="subtitle1">This event is hosted by <a href="https://test-egads-website.herokuapp.com/">EGaDS!</a></Typography>
                        <Typography variant="subtitle1">The Electronic Game Developers Society is a student organization at UT Austin.</Typography>
                    </div>
                    <div className="infoCard">
                        <img src={whoImage} alt='who_image' style={styles.image}/>
                        <Typography variant="h2">Who?</Typography>
                        <Typography variant="subtitle1">This event is hosted by <a href="https://test-egads-website.herokuapp.com/">EGaDS!</a></Typography>
                        <Typography variant="subtitle1">The Electronic Game Developers Society is a student organization at UT Austin.</Typography>
                    </div>
                </div>
                <div className="infoRow">
                    <div className="infoCard">
                        <img src={whoImage} alt='who_image' style={styles.image}/>
                        <Typography variant="h2">Who?</Typography>
                        <Typography variant="subtitle1">This event is hosted by <a href="https://test-egads-website.herokuapp.com/">EGaDS!</a></Typography>
                        <Typography variant="subtitle1">The Electronic Game Developers Society is a student organization at UT Austin.</Typography>
                    </div>
                    <div className="infoCard">
                        <img src={whoImage} alt='who_image' style={styles.image}/>
                        <Typography variant="h2">Who?</Typography>
                        <Typography variant="subtitle1">This event is hosted by <a href="https://test-egads-website.herokuapp.com/">EGaDS!</a></Typography>
                        <Typography variant="subtitle1">The Electronic Game Developers Society is a student organization at UT Austin.</Typography>
                    </div>
                </div>

                {/* TODO: make this inline with the where why blocks */}
                <img src = {RegisterImage} alt='register image' style={{maxWidth: '100%',width: 'auto'}}/>
                

            </Container>
        );
    }
}