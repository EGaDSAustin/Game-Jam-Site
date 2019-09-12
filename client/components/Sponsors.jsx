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

export function Sponsors() {
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
  
  return (
    
    // 771 - 370 / 2, 404 - 7
    <div style={styles.container} >
      <Typography variant="h2" style={styles.header}> Sponsors </Typography>
      <Typography variant="subtitle1" color="textSecondary" style={styles.description} > Interested in becoming a sponsor ? </Typography>
      <Typography variant="subtitle1" color="textSecondary" style={styles.description}> <a href="mailto:texasegads@gmail.com" style={styles.link}>
        Contact us </a> for more information!
      </Typography >
      <img src={collage} alt="sponsors collage" height='auto' width="55%" style={{ padding: '10px'}} useMap="#sponsormap"/>
      <map name="sponsormap">
        <area shape="rect" coords="0, 0, 342, 399" href="https://kabam.com/" />
        <area shape="circle" coords="555, 200, 185" href="https://ea.com/" />
        <area shape="rect" coords="785, 190, 1170, 395" href="https://www.riotgames.com/"/>
        <area shape="rect" coords="865, 10, 1760, 165" href="https://hoft.edu/"/>
        <area shape="rect" coords="-10, 450, 1160, 870" href="https://www.zynga.com/"/>
        <area shape="rect" coords="1200, 190, 1875, 870" href="https://nianticlabs.com/"/>
      </map>
    </div>
  );
}


//<GameCard name={sponsor.name} img={sponsor.logo} link={sponsor.link} />