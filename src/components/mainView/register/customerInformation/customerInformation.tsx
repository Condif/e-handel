import React from 'react'
import { TextField, Typography, Grid, FormControl } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

interface Props {
    values: any
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, id: string) => void
}

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

export default function CustomerInformation(props: Props) {
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
                            // multiline
                            id="standard-required"
                            label="First name"
                            value={props.values.firstName}
                            onChange={(event) => props.handleInputChange(event, 'firstName')}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <FormControl fullWidth>
                        <TextField
                            required
                            id="standard-required"
                            value={props.values.lastName}
                            label="Last name"
                            onChange={(event) => props.handleInputChange(event, 'lastName')}
                        />
                    </FormControl>
                </Grid>
                <Grid item sm={12} xs={12}>
                    <FormControl fullWidth>
                        <TextField
                            required
                            label="Mobile number"
                            type="number"
                            value={props.values.mobileNumber}
                            onChange={(event) => props.handleInputChange(event, 'mobileNumber')}
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
                            value={props.values.address}
                            onChange={(event) => props.handleInputChange(event, 'address')}
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
                            value={props.values.postal}
                            onChange={(event) => props.handleInputChange(event, 'postal')}
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
                            value={props.values.city}
                            onChange={(event) => props.handleInputChange(event, 'city')}
                            variant="outlined"
                        />
                    </FormControl>
                </Grid>
            </Grid>
        </div>
    )
}
