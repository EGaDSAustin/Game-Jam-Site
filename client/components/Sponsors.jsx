import React from 'react';
import { Container, Typography, Link, Grid, Paper } from '@material-ui/core'

import styled from 'styled-components'

const StyledContainer = styled(Container)`
    padding-top: 5%;
`;

export class Sponsors extends React.Component {
    render() {
        return(
            <StyledContainer>
                <Typography variant="h3" gutterBottom="true">
                    Sponsors
                </Typography>
                <Typography variant="subtitle1" gutterBottom="true">
                    Interested in becoming a sponsor? Click <Link href="">here</Link> for more information!
                </Typography>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={3}>
                    <img src="https://cdn.pixabay.com/photo/2018/05/26/18/06/dog-3431913_1280.jpg" alt="sponsor img" width="100" height="100"></img>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                    <img src="https://cdn.pixabay.com/photo/2018/05/26/18/06/dog-3431913_1280.jpg" alt="sponsor img" width="100" height="100"></img>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                    <img src="https://cdn.pixabay.com/photo/2018/05/26/18/06/dog-3431913_1280.jpg" alt="sponsor img" width="100" height="100"></img>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                    <img src="https://cdn.pixabay.com/photo/2018/05/26/18/06/dog-3431913_1280.jpg" alt="sponsor img" width="100" height="100"></img>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                    <img src="https://cdn.pixabay.com/photo/2018/05/26/18/06/dog-3431913_1280.jpg" alt="sponsor img" width="100" height="100"></img>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                    <img src="https://cdn.pixabay.com/photo/2018/05/26/18/06/dog-3431913_1280.jpg" alt="sponsor img" width="100" height="100"></img>
                    </Grid>
                </Grid>
            </StyledContainer>
        );
    }
}