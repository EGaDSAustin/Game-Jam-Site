import React, {useState, Component} from 'react';
import { Container, Typography, Link, Grid, Paper } from '@material-ui/core'
import SteveCard from './SteveCard'
import styled from 'styled-components'

const StyledContainer = styled(Container)`
    padding-top: 5%;
`;

const styles = {
    container: {
        backgroundColor: '#5E5218',
        paddingBottom: '90px',
        paddingTop: '50px',
    },
    header: {
        paddingBottom: '30px'
    },
    description: {
        fontWeight: '400'
    },
    link: {
        color: '#F6B637',
        textDecoration: 'none',
        fontWeight: 'bold'
    }
  };

export class Sponsors2 extends Component {
    render() {
        return(
            <StyledContainer>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={3}>
                    <img src="https://cdn.pixabay.com/photo/2018/05/26/18/06/dog-3431913_1280.jpg" alt="sponsor img" width="100" height="100"></img>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                    <img src="https://cdn.pixabay.com/photo/2018/05/26/18/06/dog-3431913_1280.jpg" alt="sponsor img" width="100" height="100"></img>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                    <img src="https://cdn.pixabay.com/photo/2018/05/26/18/06/dog-3431913_1280.jpg" alt="sponsor img" width="100" height="100"></img>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                    <img src="https://cdn.pixabay.com/photo/2018/05/26/18/06/dog-3431913_1280.jpg" alt="sponsor img" width="100" height="100"></img>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                    <img src="https://cdn.pixabay.com/photo/2018/05/26/18/06/dog-3431913_1280.jpg" alt="sponsor img" width="100" height="100"></img>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                    <img src="https://cdn.pixabay.com/photo/2018/05/26/18/06/dog-3431913_1280.jpg" alt="sponsor img" width="100" height="100"></img>
                    </Grid>
                </Grid>
            </StyledContainer>
        );
    }
}


export function Sponsors () {
    const sponsors = [
        {
            name: "Niantic",
            logo: "https://upload.wikimedia.org/wikipedia/en/d/d3/NIA_logo.svg",
            link: "https://nianticlabs.com/",
        },
        {
            name: "Panic Button",
            logo: "https://upload.wikimedia.org/wikipedia/en/8/89/Panic_Button_logo.png",
            link: "http://panicbuttongames.com/about.php",
        },
        {
            name: "Farbridge",
            logo: "https://miro.medium.com/fit/c/256/256/1*JS-VVQ-I7iusO1si7L3tsA.png",
            link: "http://farbridge.com/",
        },
        {
            name: "Cute Dogo",
            logo: "https://cdn.pixabay.com/photo/2018/05/26/18/06/dog-3431913_1280.jpg",
            link: "http://www.cutestpaw.com/tag/dogs/",
        },
        {
            name: "NootNoot",
            logo: "https://emblemsbf.com/img/91217.jpg",
            link: "http://nootnoot.net/",
        },
        {
            name: "NootNoot",
            logo: "https://emblemsbf.com/img/91217.jpg",
            link: "http://nootnoot.net/",
        },
        {
            name: "NootNoot",
            logo: "https://emblemsbf.com/img/91217.jpg",
            link: "http://nootnoot.net/",
        },
        {
            name: "NootNoot",
            logo: "https://emblemsbf.com/img/91217.jpg",
            link: "http://nootnoot.net/",
        },
        {
            name: "NootNoot",
            logo: "https://emblemsbf.com/img/91217.jpg",
            link: "http://nootnoot.net/",
        },
        {
            name: "NootNoot",
            logo: "https://emblemsbf.com/img/91217.jpg",
            link: "http://nootnoot.net/",
        },
        {
            name: "NootNoot",
            logo: "https://emblemsbf.com/img/91217.jpg",
            link: "http://nootnoot.net/",
        },
        {
            name: "Straw Hat Squad",
            logo: "https://img03.deviantart.net/2186/i/2011/009/1/e/one_piece_luffy_smile_by_g_manbg-d36riyu.jpg",
            link: "https://onepace.net/?episode=123",
        },
        
    ];

    return(
        <div style={styles.container}>
            <Typography variant="h2" style={styles.header}>Sponsors</Typography>
            <Typography variant="subtitle1" color="textSecondary" style={styles.description}>Interested in becoming a sponsor?</Typography>
            <Typography variant="subtitle1" color="textSecondary" style={styles.description}>Click <a href="https://test-egads-website.herokuapp.com/" style={styles.link}>here</a> for more information!</Typography>
            {/* <div className="gamesGallery" align="center">
                <Grid container spacing={3} align="center" style={{width: '70%'}}>
                    {createGallery()}
                </Grid>
            </div> */}
        </div>
        // <StyledContainer>
        //         <Typography variant="h3" gutterBottom="true">
        //             Sponsors
        //         </Typography>
        //         <Typography variant="subtitle1" gutterBottom="true">
        //             Interested in becoming a sponsor? Click <Link href="">here</Link> for more information!
        //         </Typography>
        //         <Grid container spacing={1}>
        //         {sponsors.map(sponsor => 
        //             <SteveCard name={sponsor.name} img={sponsor.logo} link={sponsor.link} />
        //         )}
        //     </Grid>
        //     </StyledContainer>
    );
}