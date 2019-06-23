import React from 'react'
import {Container, Typography} from "@material-ui/core"

class Title extends React.Component {
    render() {
        return(
            <Container class='title'>
                <Typography>EGaDS!</Typography>
            </Container>
        );
    }
}

export default Title;