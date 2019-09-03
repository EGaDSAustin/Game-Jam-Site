import React from 'react';
import { Typography } from '@material-ui/core'
// import Masonry from 'masonry-layout'

// sponsor logos
// import niantic from '../assets/sponsors/niantic.png'
// import zynga from '../assets/sponsors/zynga.png'
// import riot from '../assets/sponsors/riot.png'
// import kabam from '../assets/sponsors/kabam.png'
// import ea from '../assets/sponsors/ea.png'
// import hoft from '../assets/sponsors/hoft.png'
import collage from '../assets/sponsors/sponsorcollage.png'

let large = "220px";

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
    },
    image: {
        small: {

        },
        medium: {

        },
        large: {
            width: '30px'
        }
    }
  };

export function Sponsors () {
    // const sponsors = [
    //     {
    //         name: "Niantic",
    //         logo: niantic,
    //         link: "https://nianticlabs.com/",
    //         size: large
    //     },
    //     {
    //         name: "Zynga",
    //         logo: zynga,
    //         link: "https://www.zynga.com/",
    //         size: large
    //     },
    //     {
    //         name: "Riot Games",
    //         logo: riot,
    //         link: "https://www.riotgames.com/en",
    //         size: large
    //     },
    //     {
    //         name: "Kabam",
    //         logo: kabam,
    //         link: "https://kabam.com/",
    //         size: large
    //     },
    //     {
    //         name: "Electronic Arts",
    //         logo: ea,
    //         link: "https://www.ea.com/",
    //         size: large
    //     },
    //     {
    //         name: "Hoft Institute",
    //         logo: hoft,
    //         link: "https://hoft.edu/",
    //         size: large
    //     },        
    // ];

    return(
        <div style={styles.container}>
            <Typography variant="h2" style={styles.header}>Sponsors</Typography>
            <Typography variant="subtitle1" color="textSecondary" style={styles.description}>Interested in becoming a sponsor?</Typography>
            <Typography variant="subtitle1" color="textSecondary" style={styles.description}><a href="texasegads@gmail.com" style={styles.link}>Contact us</a> for more information!</Typography>
            {/* {sponsors.map(sponsor => {
                return(
                    <a href={sponsor.link}><img src={sponsor.logo} alt={sponsor.name} height = 'auto' width = {sponsor.size} style={{padding: '10px'}}/></a>
            )})} */}
            <img src={collage} alt="sponsors collage" height = 'auto' width ="55%" style={{padding: '10px'}}/>
        </div>
    );
}


//<GameCard name={sponsor.name} img={sponsor.logo} link={sponsor.link} />