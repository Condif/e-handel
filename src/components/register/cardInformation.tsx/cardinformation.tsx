import React from 'react'
import { Typography, makeStyles, Theme, Grid, FormControl, TextField } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        maxWidth: 360,
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: theme.spacing(0, 0, 2),
    },
    nested: {
        padding: theme.spacing(0, 4, 2, 4),
    },
}));

export default function CardInformation() {
    const classes = useStyles();

    return (
        <>
            <Typography variant="h5" className={classes.title}>
                Payment options
            </Typography>
        </>
    )
}