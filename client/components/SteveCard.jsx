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
 * Authors: STEVE
 */

const StyledCard = styled(Card)`
    height: 100%;
    width: 100%;
    max-height: 180px;
    max-width: 180px;
    object-fit: cover;
`;

export default function SteveCard ({name, img, link}) {
    return (
        <Grid item xs={6} sm={4} md={3} lg={2}>
                    <StyledCard elevation={0}>
                        <div className="card-container">
                            <a href={link}><img src={img} class="gallery_img" alt={name} height = "100%" width = "100%"/>
                            {/* <div className="name_overlay">{name}</div> */}
                            <Typography variant="h4" className="name_overlay" style={{fontSize: '20px', verticalAlign: 'middle'}}>{name}</Typography>
                            </a>
                        </div>
                    </StyledCard>
                </Grid>
    );
}