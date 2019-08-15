import React from 'react';
import { Typography, Grid, Card, CardMedia, Container } from '@material-ui/core'

function createGallery() {
    var pastGames = [{ 
        img: "https://img.itch.zone/aW1hZ2UvMzA2MDIxLzE1MDE3OTUucG5n/347x500/LrTq%2BV.png"
    },
    {
        img: "https://img.itch.zone/aW1nLzIyMDU2OTMucG5n/original/sJ265J.png"
    },
    {
        img:"https://img.itch.zone/aW1hZ2UvMzA2MDMzLzE1MDE4NjYucG5n/347x500/VrPRRk.png"
    },
    { 
        img:"https://img.itch.zone/aW1hZ2UvMzA2MDQxLzE1MDE4NTguanBn/original/Pcsztz.jpg"
    },
    { 
        img:"https://img.itch.zone/aW1hZ2UvMzA2MDU4LzE1MDE5NTcucG5n/original/KLvjhP.png"
    },
    { 
        img:"https://img.itch.zone/aW1hZ2UvMzA2MDE4LzE1MDE4NTIucG5n/original/ndIp%2Fh.png"
    },
    { 
        img:"https://img.itch.zone/aW1hZ2UvMzA1OTkxLzE1MDE2NjIucG5n/original/4AcwnV.png"
    },
    { 
        img:"https://img.itch.zone/aW1hZ2UvMzA2MDI2LzE1MDE4MjEucG5n/original/9LvIvA.png"
    },
    { 
        img:"https://img.itch.zone/aW1hZ2UvMzA2MDE0LzE1MDE4NDgucG5n/original/pp6jqn.png"
    },
    { 
        img:"https://img.itch.zone/aW1hZ2UvMzA2MDI3LzE1MDE4MzAucG5n/original/LlZsFx.png"
    }
                    ];
    return (pastGames.map(item => 
        <Grid item xs={6} sm={4} md={3} lg={2}>
            <Card elevation={0}>
                <img src={item.img}/>
            </Card>
        </Grid>
        )
        
    );
}

export class Games extends React.Component {
    render(){
        return(
            <Container maxWidth="lg">
                <Typography variant="h3" align="center">
                    Previous Game Jam Games
                </Typography>
                <br/>
            	<Grid container spacing={4}>
                    <Grid item xs={6} sm={4} md={3} lg={2}>
                        <Card elevation={0}> 
                            <img src = "https://img.itch.zone/aW1hZ2UvMzA2MDIxLzE1MDE3OTUucG5n/347x500/LrTq%2BV.png" height = "100%" width = "100%"/>
                        </Card>
                    </Grid>

                    <Grid item xs={6} sm={4} md={3} lg={2}>
                        <Card elevation={0}> 
                            <img src = "https://img.itch.zone/aW1hZ2UvMzA2MDIxLzE1MDE3OTUucG5n/347x500/LrTq%2BV.png" height = "180px" width = "180px"/>
                        </Card>
                    </Grid>
                    
                    <Grid item xs={6} sm={4} md={3} lg={2}>
                        <Card elevation={0}>
                            <img src = "https://img.itch.zone/aW1hZ2UvMzA2MDIxLzE1MDE3OTUucG5n/347x500/LrTq%2BV.png" height = "180px" width = "180px"/>
                        </Card>
                    </Grid>

                    <Grid item xs={6} sm={4} md={3} lg={2}>
                        <Card elevation={0}>
                            <img src = "https://img.itch.zone/aW1hZ2UvMzA2MDIxLzE1MDE3OTUucG5n/347x500/LrTq%2BV.png" height = "180px" width = "180px"/>
                        </Card>
                    </Grid>
                    
                    <Grid item xs={6} sm={4} md={3} lg={2}>
                        <Card elevation={0}>
                            <img src = "https://img.itch.zone/aW1hZ2UvMzA2MDIxLzE1MDE3OTUucG5n/347x500/LrTq%2BV.png" height = "180px" width = "180px"/>
                        </Card>
                    </Grid>

                    <Grid item xs={6} sm={4} md={3} lg={2}>
                        <Card elevation={0}>
                            <img src = "https://img.itch.zone/aW1hZ2UvMzA2MDIxLzE1MDE3OTUucG5n/347x500/LrTq%2BV.png" height = "180px" width = "180px"/>
                        </Card>
                    </Grid>
                    
                    <Grid item xs={6} sm={4} md={3} lg={2}>
                        <Card elevation={0}>
                            <img src = "https://img.itch.zone/aW1hZ2UvMzA2MDIxLzE1MDE3OTUucG5n/347x500/LrTq%2BV.png" height = "180px" width = "180px"/>
                        </Card>
                    </Grid>

                    <Grid item xs={6} sm={4} md={3} lg={2}>
                        <Card elevation={0}>
                            <img src = "https://img.itch.zone/aW1hZ2UvMzA2MDIxLzE1MDE3OTUucG5n/347x500/LrTq%2BV.png" height = "180px" width = "180px"/>
                        </Card>
                    </Grid>
                    
                    <Grid item xs={6} sm={4} md={3} lg={2}>
                        <Card elevation={0}>
                            <img src = "https://img.itch.zone/aW1hZ2UvMzA2MDIxLzE1MDE3OTUucG5n/347x500/LrTq%2BV.png" height = "180px" width = "180px"/>
                        </Card>
                    </Grid>

                    <Grid item xs={6} sm={4} md={3} lg={2}>
                        <Card elevation={0}>
                            <img src = "https://img.itch.zone/aW1hZ2UvMzA2MDIxLzE1MDE3OTUucG5n/347x500/LrTq%2BV.png" height = "180px" width = "180px"/>
                        </Card>
                    </Grid>
                    
                    <Grid item xs={6} sm={4} md={3} lg={2}>
                        <Card elevation={0}>
                            <img src = "https://img.itch.zone/aW1hZ2UvMzA2MDIxLzE1MDE3OTUucG5n/347x500/LrTq%2BV.png" height = "180px" width = "180px"/>
                        </Card>
                    </Grid>

                    <Grid item xs={6} sm={4} md={3} lg={2}>
                        <Card elevation={0}>
                            <img src = "https://img.itch.zone/aW1hZ2UvMzA2MDIxLzE1MDE3OTUucG5n/347x500/LrTq%2BV.png" height = "180px" width = "180px"/>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        );
    }
} // https://www.clickertraining.com/files/u1/lab_puppy_250.jpg