import React from 'react';
import { Typography, Container, Grid, Card } from '@material-ui/core';
import styled from 'styled-components'

/**
 * a wonderful and pretty card, just like its creator
 * 
 * takes the parameters:
 *  img: the image link of the background of the card
 *  link: the redirect link
 *  name: the string that apears on hover
 * 
 */

const StyledCard = styled(Card)`
    height: 170px;
    width: 170px;
`;

export default function GameCard ({name, img, link}) {
    return (
        // this is perfect uwu
        <Grid item xs={6} sm={5} md={4} lg={3} xl={2}>
                    <StyledCard elevation={0}>
                        <div className="card-container">
                            <a href={link}><img src={img} className="gallery_img" alt={name} height = "100%" width = "100%" style={{objectFit: 'cover'}}/>
                            {/* <div className="name_overlay">{name}</div> */}
                            <Typography variant="h4" className="name_overlay" style={{fontSize: '20px', verticalAlign: 'middle'}}>{name}</Typography>
                            </a>
                        </div>
                    </StyledCard>
                </Grid>
    );
}