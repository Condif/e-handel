import React from 'react'
import { PaymentTypes, PaymentOption } from '../paymentAPI'
import { Container, makeStyles, Theme, Typography } from '@material-ui/core'
import StoreRoundedIcon from '@material-ui/icons/StoreRounded';

interface Props {
    method: string
}

const useStyles = makeStyles((theme: Theme) => ({
    blankTitle: {
        textAlign: 'center',
        margin: theme.spacing(1,1)
    },
    wrapper: {
        padding: theme.spacing(0,1,2),
        height: '100%',
        border: '2px dashed #EBEBEB',
        borderRadius: '1rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
}))

const blankPage = (classes: Record<"blankTitle" | "wrapper", string>) => {
    return (
        <Container className={classes.wrapper}>
             <Typography variant="h5" className={classes.blankTitle}>
                Choose a payment method
            </Typography>
            <StoreRoundedIcon fontSize="large"/>
        </Container>
    )
}

export default function ChosenPayment(props: Props) {
    const classes = useStyles();
    return (
        <>
            {(props.method === 'none') 
                ?  blankPage(classes)
                : null
            }
        </>
    )
}