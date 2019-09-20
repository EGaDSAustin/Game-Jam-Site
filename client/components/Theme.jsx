import React from 'react';
import {
    Typography,
    Container,
    Grid
} from '@material-ui/core';

const diversifiers = [
    {
        name: "I'm in the game!",
        description: "Have all your teammates referenced in the game, whether it be credits or in actual gameplay."
    },
    {
        name: "Blast from the past",
        description: "Incorporate any previous UT game jam theme. Previous themes are block, trash, cactus, it begins, binary, day and night."
    },
    {
        name: "A minor change",
        description: "All music in your game must be in a minor key."
    },
    {
        name: "Can you pet the dog?",
        description: "Include one or more animals or pets that the player can pet and interact with."
    },
    {
        name: "Keep it simple",
        description: "Make your game playable by people who can use no more than a D-pad plus 2 buttons, with hardware like an Xbox Adaptive Controller in mind."
    },
    {
        name: "Hold on, I need to set my controls",
        description: "Include remappable controls in your game."
    },
    {
        name: "Always room for one more",
        description: "Make a game where new players can join at any time."
    },
    {
        name: "Put on your dancing shoes",
        description: "Incorporate a dance pad as a control scheme for your game."
    },
    {
        name: "Language-Independence",
        description: "Create a game that can be understood regardless of which language the player speaks."
    },
    {
        name: "In control",
        description: "Implement a control scheme that doesn’t use a keyboard or controller."
    },
    {
        name: "Where am I?",
        description: "Implement a visible mini-map or some way to view a map in-game."
    },
    {
        name: "Disunity",
        description: "Make your game outside of the Unity Game Engine."
    },
    {
        name: "Mr. Worldwide",
        description: "Make your game playable within a web browser."
    },
    {
        name: "What’s the wifi password?",
        description: "Make an online multiplayer game."
    },
    {
        name: "Ridin' Solo",
        description: "The game story only has one character."
    },
    {
        name: "Power down",
        description: "Losing abilities is the only way for your player to progress."
    },
    {
        name: "Mixed Media",
        description: "Make a physical game that utilises computer code."
    },
    {
        name: "Ephemeral",
        description: "Make a game that can only be played once by each player."
    },
    {
        name: "Can you hear me now?",
        description: "Any spoken lines or voice-over must be voiced by a member of your team."
    },
    {
        name: "Recycle!",
        description: "Instead of making a brand new game, start from an existing Game Jam game from a previous year, made by someone you don’t know. Improve it and take it in a new direction."
    },
    {
        name: "Simon Says",
        description: "Use exactly four colors."
    },
    {
        name: "Do you remember?",
        description: "Implement some sort of elemental system in your game (i.e. earth, wind, fire)."
    },
    {
        name: "Polyglot",
        description: "Localize your game into two or more languages."
    },
    {
        name: "Beatbox",
        description: "All sounds for your game must be created using your voice or body."
    },
    {
        name: "Easter Egg",
        description: "Include an Easter Egg or secret in your game."
    },
    {
        name: "Da Ba Dee Da Ba Dye",
        description: "Your game can only use shades of blue."
    },
    {
        name: "Monochrome",
        description: "Your game can only use a monochromatic color scheme."
    },
    {
        name: "Hidden Depths",
        description: "The protagonist isn’t who you think they are at the beginning."
    },
    {
        name: "Palindrome",
        description: "The game story must end the same way it began."
    },
    {
        name: "Inception",
        description: "Create a totally different game that can be played inside your game submission. Must also relate to the theme."
    },
    {
        name: "Cryptographer",
        description: "Create a new language just for your game."
    },
    {
        name: "Don’t say a word",
        description: "A multiplayer game that requires communication between players, without relying on text or voice."
    },
    {
        name: "Instrumental",
        description: "All sound is sourced from variations of a single instrument, e.g. different types of guitar, or different types of piano."
    },
    {
        name: "Let's get moving!",
        description: "Make a game that requires or encourages exercise or physical activity."
    },
    {
        name: "Upside down",
        description: "One or more game systems programmed by an artist, major art assets produced by programmers/coder."
    },
    {
        name: "Kevin",
        description: "Kevin?"
    }
]

function createTheme() {
    return(
        <div align="center">
            <Container>
                <Typography variant="h1" color="primary">The theme of the game jam is...</Typography>
                <Typography variant="h1" color="secondary">Return!</Typography>
            </Container>
        </div>
    );
}

function createDiversifiers() {
    return(
        <div>
            <div align="center">
                <Container>
                    <Typography variant="h2" color="secondary">DIVERSIFIERS</Typography>
                </Container>
            </div>
            <br/>
            {diversifiers.map(div_item => {
                return(
                    <div align="center">
                        <Typography variant="h6">{div_item.name}</Typography>
                        <Typography variant="body1">{div_item.description}</Typography>
                    </div>
                );
            })}
        </div>
    );
}

export class Theme extends React.Component {
    render() {
        return(
            <div>
                {createTheme()}
                <br/>
                {createDiversifiers()}
                <br/>
            </div>
        );
    }
}