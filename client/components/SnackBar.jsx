import React, {useState, useEffect, Component} from 'react'
import { Snackbar, Grow, makeStyles } from '@material-ui/core'
import ErrorIcon from '@material-ui/icons/Error';

const useStyles = makeStyles(theme => ({
    error: {
        backgroundColor: theme.palette.error.dark,
    },
    icon: {
        fontSize: 20,
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing(1),
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    }
}));


function GrowTransition(props) {
    return <Grow {...props} />;
}

export default function SnackBar ({message, open, setOpen}) {
    const classes = useStyles();
    return(
        <Snackbar 
            className={classes.error}
            open={open}
            onClose={() => setOpen(false)}
            TransitionComponent={GrowTransition}
            message={<span className={classes.message}>
                <ErrorIcon className={classes.icon}/>  
                <p style={{paddingLeft: "10px"}}>{message}</p>
                </span>}    
        />
    )
}