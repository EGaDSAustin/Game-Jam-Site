import React from 'react';
import { Typography, Container, Link } from '@material-ui/core'


export class Footer extends React.Component {
    render(){
        return(
        	<Container maxWidth="sm">
        		<Typography variant="h5" align="center">
        			We can't wait to see you there! <br/> In the meantime...
        		</Typography>
        		<center><img src="https://freepngimage.com/content/uploads/images/golden-retriever-puppy-5395.png" width="30%" height="30%"/></center>
        		<Typography variant="h5" align="center">
        			Want to join EGaDS?
        		</Typography>
        		<Typography variant="subtitle1" align="center">
        			Check out our <Link href="https://test-egads-website.herokuapp.com/">website</Link> or 
        			<Link href="https://www.facebook.com/groups/egadsaustin/"> Facebook</Link> page! Also, feel free to
                    join our <Link href="https://discord.gg/4ShtMPx">Discord server</Link> and talk to other members!
        		</Typography>
        	</Container>
        );
    }
}