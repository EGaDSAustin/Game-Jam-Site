import React from 'react';
import { Container, Typography, Link } from '@material-ui/core'

export class Sponsors extends React.Component {
    render() {
        return(
            <Container>
                <Typography variant="h3" gutterBottom="true">
                    Sponsors
                </Typography>
                <Typography variant="subtitle1" gutterBottom="true">
                    Interested in becoming a sponsor? Click <Link href="">here</Link> for more information!
                </Typography>
            </Container>
            // <div className='Sponsor'>
            //         <h1>Sponsors</h1>
            //         <p>Interested in becoming a sponsor? Click <a href="">here</a> for more information!</p>
            //     </div>
        );
    }
}