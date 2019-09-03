import React, {useState, Component} from 'react';
import { Container, Typography, Link, Grid, Paper } from '@material-ui/core';
import GameCard from './GameCard';
import styled from 'styled-components';
import ealogo from '../assets/sponsors/ealogo.png';
import hoftlogo from '../assets/sponsors/hoftlogo.png';
import kabamlogo from '../assets/sponsors/kabamlogo.PNG';
import nianticlogo from '../assets/sponsors/nianticlogo.png';
import riotgameslogo from '../assets/sponsors/riotgameslogo.png';
import zyngalogo from '../assets/sponsors/zyngalogo.png';

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

export function Sponsors () {
    const sponsors = [
        {
            name: "Niantic",
            logo: nianticlogo,
            link: "https://nianticlabs.com/",
        },
        {
            name: "EA",
            logo: ealogo,
            link: "https://www.ea.com/",
        },
        {
            name: "HOFT",
            logo: hoftlogo,
            link: "https://hoft.edu",
        },
        {
            name: "Kabam",
            logo: kabamlogo,
            link: "https://kabam.com/",
        },
        {
            name: "Riot",
            logo: riotgameslogo,
            link: "https://www.riotgames.com/en",
        },
        {
            name: "zynga",
            logo: zyngalogo,
            link: "https://www.zynga.com/",
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
        <StyledContainer>
                <Typography variant="h3" gutterBottom="true">
                    Sponsors
                </Typography>
                <Typography variant="subtitle1" gutterBottom="true">
                    Interested in becoming a sponsor? Click <Link href="">here</Link> for more information!
                </Typography>
                <Grid container spacing={1}>
                {sponsors.map(sponsor => 
                    <GameCard name={sponsor.name} img={sponsor.logo} link={sponsor.link} />
                    )}
            </Grid>
            </StyledContainer>
            </div>
    );
}