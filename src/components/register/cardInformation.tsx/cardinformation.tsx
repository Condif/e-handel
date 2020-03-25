import React from 'react'
import { Typography, makeStyles, Theme, Grid, FormControl, TextField } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
    title: {
        margin: theme.spacing(0, 0, 2),
    },
}));

export default function CardInformation() {
    const classes = useStyles();

    return (
        <>
            <Typography variant="h5" className={classes.title}>
                Payment options
            </Typography>
            <Grid container>
                <Grid item md={4} sm={6} xs={12}>
                    <Typography variant="h5" className={classes.title}>
                        Options
                    </Typography>
                </Grid>
                <Grid item md={8} sm={6} xs={12}>
                    <Typography variant="h5" className={classes.title}>
                        Information
                    </Typography>
                </Grid>
            </Grid>
        </>
    )
}