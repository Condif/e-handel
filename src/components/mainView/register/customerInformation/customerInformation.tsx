import React from 'react'
import { TextField, Typography, Grid, FormControl, FormControlLabel, Switch } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

interface Props {
    alternate: boolean
    useAlternate: () => void
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
            margin: theme.spacing(0, 3, 1, 0),
        },
    }),
);

export default function CustomerInformation(props: Props) {
    const classes = useStyles();

    return (
        <div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Typography variant="h5" className={classes.title}>
                    Your information
                </Typography>
                <FormControlLabel
                    control={
                        <Switch
                            size="small"
                            checked={props.alternate}
                            onChange={props.useAlternate}
                            name="useAlternateOptions"
                            color="primary"
                        />
                    }
                    label="Not for you?"
                    style={{
                        margin: 0
                    }}
                />
            </div>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={6}>
                    <FormControl fullWidth>
                        <TextField
                            required
                            error={props.values.firstName.error}
                            label="First name"
                            value={props.values.firstName.value}
                            onChange={(event) => props.handleInputChange(event, 'firstName')}
                            helperText={(props.values.firstName.error) ? "Enter letters" : null}
                            inputProps={{
                                maxLength: 20
                            }}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <FormControl fullWidth>
                        <TextField
                            required
                            error={props.values.lastName.error}
                            value={props.values.lastName.value}
                            label="Last name"
                            onChange={(event) => props.handleInputChange(event, 'lastName')}
                            helperText={(props.values.lastName.error) ? "Enter letters" : null}
                            inputProps={{
                                maxLength: 20
                            }}
                        />
                    </FormControl>
                </Grid>
                <Grid item sm={12} xs={12}>
                    <FormControl fullWidth>
                        <TextField
                            required
                            error={props.values.mobileNumber.error}
                            label="Mobile number"
                            value={props.values.mobileNumber.value}
                            onChange={(event) => props.handleInputChange(event, 'mobileNumber')}
                            variant="outlined"
                            helperText={(props.values.mobileNumber.error) ? "Enter numbers (10)" : null}
                            inputProps={{
                                maxLength: 10
                            }}
                        />
                    </FormControl>
                </Grid>
                <Grid item sm={12} xs={12}>
                    <FormControl fullWidth>
                        <TextField
                            required
                            error={props.values.address.error}
                            label="Address"
                            value={props.values.address.value}
                            onChange={(event) => props.handleInputChange(event, 'address')}
                            inputProps={{
                                maxLength: 20
                            }}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <FormControl fullWidth>
                        <TextField
                            required
                            error={props.values.postal.error}
                            label="Postal code"
                            value={props.values.postal.value}
                            onChange={(event) => props.handleInputChange(event, 'postal')}
                            helperText={(props.values.postal.error) ? "Enter numbers (5)" : null}
                            inputProps={{
                                maxLength: 5
                            }}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <FormControl fullWidth>
                        <TextField
                            required
                            error={props.values.city.error}
                            label="City"
                            value={props.values.city.value}
                            onChange={(event) => props.handleInputChange(event, 'city')}
                            helperText={(props.values.city.error) ? "Enter letters" : null}
                            inputProps={{
                                maxLength: 20
                            }}
                        />
                    </FormControl>
                </Grid>
            </Grid>
        </div>
    )
}
