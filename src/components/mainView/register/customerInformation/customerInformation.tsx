import React from 'react'
import { TextField, Typography, Grid, FormControl } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '25ch',
            },
            '& .MuiGrid-item': {
                padding: 0,
            },
        },
        title: {
            margin: theme.spacing(0, 0, 1),
        },
    }),
);

export default function CustomerInformation() {
    const classes = useStyles();

    return (
        <div>
            <Typography variant="h5" className={classes.title}>
                Your information
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={6}>
                    <FormControl fullWidth>
                        <TextField 
                        required 
                        id="standard-required" 
                        label="First name" 
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <FormControl fullWidth>
                        <TextField
                            required
                            id="standard-required"
                            label="Last name"
                        />
                    </FormControl>
                </Grid>
                <Grid item sm={12} xs={12}>
                    <FormControl fullWidth>
                        <TextField
                            required
                            label="Mobile number"
                            type="number"
                            variant="outlined"
                        />
                    </FormControl>
                </Grid>
                <Grid item sm={12} xs={12}>
                    <FormControl fullWidth>
                        <TextField
                            required
                            id="outlined-required"
                            label="Address"
                            variant="outlined"
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <FormControl fullWidth>
                        <TextField
                            required
                            id="outlined-number"
                            label="Postal code"
                            type="number"
                            variant="outlined"
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <FormControl fullWidth>
                        <TextField
                            required
                            id="outlined-required"
                            label="City"
                            variant="outlined"
                        />
                    </FormControl>
                </Grid>
            </Grid>
        </div>
    )
}