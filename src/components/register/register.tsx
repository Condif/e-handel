import React from 'react'
import { Container, Typography, Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import ItemOverview from './itemOverview/itemOverview';
import CustomerInformation from './customerInformation/customerInformation';
import DeliveryOptions from './deliveryOptions/deliveryOptions';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(3),
        color: theme.palette.text.secondary,
    },
  }));

export default function Register() {
    const classes = useStyles();

    return (
        <Container maxWidth="md" style ={{
            height: "100vh"
        }}>
            <Typography variant="h3" component="h1">
                Checkout
            </Typography>
            <div className={classes.root}>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <ItemOverview />
                    </Paper>
                  </Grid>
                  <Grid item xs={12} sm={6} md={8}>
                    <Paper className={classes.paper}>
                        <CustomerInformation />
                    </Paper>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <Paper className={classes.paper}>
                        <DeliveryOptions />
                    </Paper>
                  </Grid>
                </Grid>
            </div>
        </Container>
    )
}