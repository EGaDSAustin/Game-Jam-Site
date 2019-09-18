import React from 'react';
import {
    Typography,
    Container,
    Grid
} from '@material-ui/core';
import { animateHTML } from './FadeInOnView.jsx'

// determine the opacity based on how many objects have the className "hidden", used for the bug where schedules were opacity 0 when changing the view (like going to the register page)
// var opacityy = document.getElementsByClassName("hidden").length > 0 ? '0' : '1';

document.documentElement.style
    .setProperty('--schedule-opacity', document.getElementsByClassName("hidden").length > 0 ? '0' : '1');

const styles = {
    header: {
        padding: '30px'
    },
    date: {
        marginLeft: '5px',
        marginBottom: '20px',
        textAlign: 'left',
        color: 'white'
    },
    time: {
        marginLeft: '25px',
        width: '82px',
        textAlign: 'center',
        marginTop: '15px',
        fontSize: '23px'
    },
    description: {
        width: '187px',
        height: '80px',
        marginLeft: '50px',
        marginTop: '20px',
        textAlign: 'left'
    },
    // container: {
    //     backgroundColor: 'white',
    //     paddingTop: '0px',
    //     paddingLeft: '0px', 
    //     paddingRight: '0px', 
    //     paddingBottom: '20px',
    //     width: '369px', 
    //     marginLeft: '0px',
    //     maxWidth: '369px'
    // },
    // mainGrid: {
    //     whiteSpace: 'nowrap', 
    //     // marginLeft: '20px',
    //     align: 'center',
    //     // width:'80%',
    //     opacity: opacityy
    // },
    // singleDayGrid: {
    //     padding: '0px 20px',
    //     display: 'inline-block',
    //     verticalAlign: 'top',
    //     whiteSpace: 'normal'
    // }
};


const schedule_info = [{
        date: "Friday, Sept 20 @ GDC",
        events: [{
                time: "4:00 pm",
                description: "Sponsor and Student Mixer, 3rd Floor Atrium" //: Past games showcase, tabling, refreshments, jackbox/other icebreakers"
            },
            {
                time: "5:00 pm",
                description: "Opening remarks, Auditorium"
            },
            {
                time: "5:20 pm",
                description: "Theme reveal and official start of the game jam!"
            },
            {
                time: "6:00 pm",
                description: "Version Control Workshop by Ava Pek"
            },
            {
                time: "7:00 pm",
                description: "Workshop by Magic Leap"
            },
            {
                time: "1:00 am",
                description: "Building closes"
            },
        ],
    },
    {
        date: "Saturday, Sept 21 @ GDC",
        events: [{
                time: "9:00 am",
                description: "Building reopens and breakfast is served"
            },
            {
                time: "11:00am",
                description: "Unity Scripting Workshop"
            },
            {
                time: "12:00pm",
                description: "Building to Target Platforms by MJ Johns"
            },
            {
                time: "1:00 pm",
                description: "Lunch is served"
            },
            {
                time: "5:00 pm",
                description: "Game Polishing by MJ Johns"
            },
            {
                time: "7:00 pm",
                description: "Dinner is served"
            },
            {
                time: "1:00 am",
                description: "Building closes (go sleep and shower)"
            },
        ],
    },
    {
        date: "Sunday, Sept 22 @ GDC",
        events: [{
                time: "9:00 am",
                description: "Building opens, breakfast is served"
            },
            {
                time: "12:00 pm",
                description: "Submissions are due on itch.io"
            },
            {
                time: "12:15 pm",
                description: "Judging"
            },
            {
                time: "1:30 pm",
                description: "Awards and final remarks"
            },
        ],
    },
]

function createSchedule() {
    return (
        // MAIN GRID that holds all the days
        <div className="hidden" >
            {schedule_info.map(date_item => {
                return (
                    // SINGLE DAY GRID
                    <div  className="schedulesSingleGrid">
                        <Typography variant="h3" gutterBottom style={styles.date}>// {date_item.date}</Typography>
                        {date_item.events.map(event => {
                            return (
                                // INDIVIDUAL EVENTS
                                <Container className="schedulesEvent">
                                    <Grid container spacing = {3} alignItems = "left" alignContent="center">
                                        <Grid item xs = {3}>
                                            <Typography variant="h4" style={styles.time}>{event.time}</Typography>
                                        </Grid>
                                        <Grid item xs = {9}>
                                            <Typography variant = "body1" style={styles.description}>{event.description}</Typography>
                                        </Grid>
                                    </Grid>
                                </Container>
                    )})}</div>);
            })}
        </div>
    );
}



export class Schedule extends React.Component {

    componentDidMount(){
        animateHTML().init()
    }

    render() {
        return ( 
            <div align = "center" className = "schedulesMainGrid">
                <Typography variant = "h2" color = 'secondary' id = "schedule" style = {styles.header}> 
                    Schedule 
                </Typography> 
                {createSchedule()} 
            </div>
        )
    }
}

// function createSchedule() {
//     return (
//         // MAIN GRID that holds all the days
//         <Grid container spacing = {5} style={styles.mainGrid} className="hidden" id="very-specific-design">
//             {schedule_info.map(date_item => {
//                 return (
//                     // SINGLE DAY GRID
//                     <Grid item xs={6} sm={6}>
//                     <Typography variant="h3" gutterBottom style={styles.date}>// {date_item.date}</Typography>
//                     {date_item.events.map(event => {
//                         return (
//                             // INDIVIDUAL EVENTS
//                             <Container style={styles.container}>
//                                 <Grid container spacing = {3} alignItems = "left" alignContent="center">
//                                     <Grid item xs = {3}>
//                                         <Typography variant="h4" style={styles.time}>{event.time}</Typography>
//                                     </Grid>
//                                     <Grid item xs = {9}>
//                                         <Typography variant = "body1" style={styles.description}>{event.description}</Typography>
//                                     </Grid>
//                                 </Grid>
//                             </Container>
//                     )})}
//                 </Grid>);
//             })}
//         </Grid>
//     );
// }