import React from 'react';
import { Typography, Grid, Card, CardMedia, Container } from '@material-ui/core'
import styled from 'styled-components'
import './css/Games.css'

const StyledContainer = styled(Container)`
    padding-top: 5%;
`;

const StyledCard = styled(Card)`
    height: 100%;
    width: 100%;
    max-height: 180px;
    max-width: 300px;
    object-fit: cover;
`;


function createGallery() {
    var pastGames = [{
        name: "Picture Perfect",
        img: "https://img.itch.zone/aW1hZ2UvMzA2MDIxLzE1MDE3OTUucG5n/347x500/LrTq%2BV.png",
        link: "https://crimecommitter.itch.io/picture-perfect"
    },
    {
        name: "Ascent",
        img: "https://img.itch.zone/aW1nLzIyMDU2OTMucG5n/original/sJ265J.png",
        link: "https://feezy15.itch.io/ascent"
    },
    {
        name: "Blocker",
        img: "https://img.itch.zone/aW1hZ2UvMzA2MDQxLzE1MDE4NTguanBn/347x500/68ucyK.jpg",
        link: "https://jackyoustra.itch.io/blocker"
    },
    { 
        name: "Impact!",
        img:"https://img.itch.zone/aW1hZ2UvMzA2MDMzLzE1MDE4NjYucG5n/347x500/VrPRRk.png",
        link: "https://absoluthecc.itch.io/impact"
    },
    { 
        name: "Deception",
        img:"https://img.itch.zone/aW1hZ2UvMzA2MDU4LzE1MDE5NTcucG5n/original/KLvjhP.png",
        link: "https://joyshocker.itch.io/deception-demo2"
    },
    { 
        name: "Tetris Blocker",
        img:"https://img.itch.zone/aW1hZ2UvMzA2MDE4LzE1MDE4NTIucG5n/original/ndIp%2Fh.png",
        link: "https://raneyj.itch.io/tetris-blocker"
    },
    { 
        name: "Illegal Aliens",
        img:"https://img.itch.zone/aW1hZ2UvMzA1OTkxLzE1MDE2NjIucG5n/original/4AcwnV.png",
        link: "https://jonathan-serbent.itch.io/illegal-aliens"
    },
    { 
        name: "Mission ImPAWsible",
        img:"https://img.itch.zone/aW1hZ2UvMzA2MDI2LzE1MDE4MjEucG5n/original/9LvIvA.png",
        link: "https://imcdo.itch.io/mission-impawsible"
    },
    {
        name: "Block Adventures",
        img:"https://img.itch.zone/aW1hZ2UvMzA2MDE0LzE1MDE4NDgucG5n/original/pp6jqn.png",
        link: "https://justin2jam.itch.io/block-star"
    },
    { 
        name: "B-lock",
        img:"https://img.itch.zone/aW1hZ2UvMzA2MDI3LzE1MDE4MzAucG5n/original/LlZsFx.png",
        link: "https://crabtree.itch.io/block"
    }];
    
    return (pastGames.map(item => 
        <Grid item xs={6} sm={4} md={3} lg={2}>
            <StyledCard elevation={0}>
                <div className="card-container">
                <a href={item.link}><img src={item.img} alt={item.name} height = "100%" width = "100%"/>
                <div className="overlay">{item.name}</div>
                </a>
                </div>
            </StyledCard>
        </Grid>
        )
        
    );
}

export class Games extends React.Component {
    render(){
        return(
            <StyledContainer maxWidth="lg">
                <Typography variant="h3" align="center">
                    Previous Game Jam Games
                </Typography>
                <br/>
            	<Grid container spacing={4}>
                    {createGallery()}
                </Grid>
            </StyledContainer>
        );
    }
} // https://www.clickertraining.com/files/u1/lab_puppy_250.jpg