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
    height: 170px;
    width: 170px;
`;

export default function SteveCard ({name, img, link}) {
    return (
        // TODO make the spacing between items smaller and non-variable?
        <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                    <StyledCard elevation={0}>
                        <div className="card-container">
                            <a href={link}><img src={img} class="gallery_img" alt={name} height = "100%" width = "100%" style={{objectFit: 'cover'}}/>
                            {/* <div className="name_overlay">{name}</div> */}
                            <Typography variant="h4" className="name_overlay" style={{fontSize: '20px', verticalAlign: 'middle'}}>{name}</Typography>
                            </a>
                        </div>
                    </StyledCard>
                </Grid>
    );
}