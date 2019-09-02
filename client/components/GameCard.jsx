import React from 'react';
import { Typography, Grid } from '@material-ui/core';

/**
 * a wonderful and pretty card, just like its creator
 * 
 * takes the parameters:
 *  img: the image link of the background of the card
 *  link: the redirect link
 *  name: the string that apears on hover
 * 
 */

const styles = {
    container: {
        height: '170px', 
        width: '170px', 
        overflow: 'hidden',
        marginLeft: '10px'
    },
    image: {
        objectFit: 'cover'
    },
    name: {
        fontSize: '20px', 
        verticalAlign: 'middle'
    }
}

export default function GameCard ({name, img, link}) {
    return (
        // TODO make the spacing between items smaller and non-variable?
        <Grid item xs={5} sm={4} md={3} lg={2} xl={2}>
            <div className="card-container" style={styles.container}>
                <a href={link}><img src={img} className="gallery_img" alt={name} height = "100%" width = "100%" style={styles.image}/>
                <Typography variant="h4" className="name_overlay" style={styles.name}>{name}</Typography>
                </a>
            </div>
        </Grid>
    );
}