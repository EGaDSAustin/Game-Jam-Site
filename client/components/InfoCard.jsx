import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

const styles = {
  card: {
    maxWidth: '100%'
  },
  media: {
    height: 420,
    width: 300
  },
  textSpacing: {
    marginBottom: '10px'
  },
  cardMedia: {
    align: 'center'
  },
  image: {
    marginTop: '15px',
    height: '200px',
    width: 'auto',
  }
};

const InfoCard = (props) => {
    console.log("PROPS",props)
  return (
    // <CardActionArea>
    //   <Card style={styles.media}>
    //     <CardMedia src='img' align='center' style={styles.CardMedia}>
    //       <img src={props.photo} alt={props.alt_text} style={styles.image}/>
    //     </CardMedia>
    //     <CardContent>
    //       <Typography gutterBottom="gutterBottom" variant='h6' component="h3" style={styles.textSpacing} align='center'>
    //         {props.category}
    //       </Typography>
    //       <Typography component="p" variant='caption' align="center" style={styles.textSpacing}>
    //         {props.description}
    //       </Typography>
    //     </CardContent>
    //   </Card>
    // </CardActionArea>
    <div className="infoCard" padding='20px'>
                        <img src={props.photo} alt='who_image' style={styles.image}/>
                        <Typography variant="h2">Who?</Typography>
                        <Typography variant="subtitle1">This event is hosted by <a href="https://test-egads-website.herokuapp.com/">EGaDS!</a></Typography>
                        <Typography variant="subtitle1">The Electronic Game Developers Society is a student organization at UT Austin.</Typography>
                    </div>
    )
}

InfoCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(InfoCard);
