import React from 'react';
import { Typography, Grid } from '@material-ui/core'
import './css/Games.css'
import GameCard from './GameCard'
import '../app.css'

// game images import
import pictureperfect from '../assets/games/pictureperfect.png'
import blockstar from '../assets/games/blockstar.gif'
import b_lock from '../assets/games/b-lockkk.png'
import blockadventures from '../assets/games/blockadventures.png'
import junkyardbrawl from '../assets/games/junkyardbrawl.png'
import littleblockers from '../assets/games/littleblockers.png'
import trashdash from '../assets/games/trashdash.png'
import garbagegladiators from '../assets/games/garbagegladiators.png'
import ascent from '../assets/games/ascent.png'
import trashteroids from '../assets/games/trashteroids.gif'
import tetrisblocker from '../assets/games/tetrisblocker.png'
import ignite from '../assets/games/ignite.png'
import missionimpawsible from '../assets/games/missionimpawsible.png'
import deception from '../assets/games/deception.png'
import impact from '../assets/games/impactt.png'
import swiffersadventure from '../assets/games/swiffersadventure.png'
import landfill from '../assets/games/landfill.png'
import trashketbrawl from '../assets/games/trashketbrawl.png'
import illegalaliens from '../assets/games/illegalaliens.png'
import cozycatcafe from '../assets/games/cozycatcafe.png'


const styles = {
    container: {
        backgroundColor: 'white',
        // position: 'relative',
        paddingBottom: '90px',
        paddingTop: '50px',
        marginTop: '100px',
        // display: 'block'
    },
    header: {
        padding: '20px'
    }
  };

function createGallery() {
    var pastGames = [
    {
        name: "Junkyard Brawl",
        img: junkyardbrawl,
        link: "https://bootskats.itch.io/junkyard-brawl"
    },
    {
        name: "Trash Dash",
        img: trashdash,
        link: "https://raneyj.itch.io/trash-dash"
    },
    {
        name: "Block Adventures",
        img: blockadventures,
        link: "https://zorzag.itch.io/block-adventure"
    },
    {
        name: "Little Blockers",
        img: littleblockers,
        link: "https://verybester.itch.io/little-blockers"
    },
    {
        name: "Garbage Gladiators",
        img: garbagegladiators,
        link: "https://someotherguy.itch.io/garbage-gladiators"
    },
    {
        name: "Ascent",
        img: ascent,
        link: "https://feezy15.itch.io/ascent"
    },
    {
        name: "Picture Perfect",
        img: pictureperfect,
        link: "https://crimecommitter.itch.io/picture-perfect"
    },
    {
        name: "Trashteroids",
        img: trashteroids,
        link: "https://jomard123.itch.io/trashteroids"
    },
    { 
        name: "Tetris Blocker",
        img: tetrisblocker,
        link: "https://raneyj.itch.io/tetris-blocker"
    },
    { 
        name: "B-lock",
        img: b_lock,
        link: "https://crabtree.itch.io/block"
    },
    { 
        name: "Ignite",
        img: ignite,
        link: "https://typesteam.itch.io/ignite"
    },
    {
        name: "Block Star",
        img: blockstar,
        link: "https://justin2jam.itch.io/block-star"
    },
    { 
        name: "Impact!",
        img: impact,
        link: "https://absoluthecc.itch.io/impact"
    },
    { 
        name: "Mission ImPAWsible",
        img: missionimpawsible,
        link: "https://imcdo.itch.io/mission-impawsible"
    },
    { 
        name: "LandFill",
        img: landfill,
        link: "https://imcdo.itch.io/landfill-2017-fall-tycoon"
    },
    { 
        name: "Cozy Cat Cafe",
        img: cozycatcafe,
        link: "https://globalgamejam.org/2019/games/cozy-cat-cafe"
    },
    { 
        name: "Deception",
        img: deception,
        link: "https://joyshocker.itch.io/deception-demo2"
    },
    { 
        name: "Trashket Brawl",
        img: trashketbrawl,
        link: "https://flador.itch.io/trashketbrawl"
    },
    { 
        name: "Swiffer's Adventure",
        img: swiffersadventure,
        link: "https://sara77789.itch.io/swiffers-adventure"
    },
    { 
        name: "Illegal Aliens",
        img: illegalaliens,
        link: "https://jonathan-serbent.itch.io/illegal-aliens"
    },
    {
        name: "Blocker",
        img: "https://img.itch.zone/aW1hZ2UvMzA2MDQxLzE1MDE4NTguanBn/347x500/68ucyK.jpg",
        link: "https://jackyoustra.itch.io/blocker"
    },
    
];
    
    return (pastGames.map(item => 
            <GameCard name={item.name} img={item.img} link={item.link} />
        )
        
    );
}

export class Games extends React.Component {
    render(){
        return(
            <div style={styles.container}>
                <Typography variant="h2" color='secondary' style={styles.header}>Previous game jam games</Typography>
                <br/>
                <div className="gamesGallery" align="center">
                    <Grid container spacing={3} align="center" style={{width: '70%'}}>
                        {createGallery()}
                    </Grid>
                </div>
            </div>
        );
    }
} // https://www.clickertraining.com/files/u1/lab_puppy_250.jpg