import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core'
import { DeliveryOption } from './deliveryOptions/deliveryAPI';
import { PaymentOption } from './paymentOptions/paymentAPI';

interface Props {
    itemTotal: { totalValue: number, itemAmount: number }
    delivery: DeliveryOption
    payment: PaymentOption
}

const useStyles = makeStyles(() =>
    createStyles({
        totalWrapper: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }
    }));

export default function CheckoutTotal(props: Props) {
    const classes = useStyles();

    return (
        <>
            <p>{props.itemTotal.itemAmount}</p>
            <p>{props.itemTotal.totalValue}</p>
            <p>{props.delivery.price}</p>
            <p>{props.payment.name}</p>
        </>
    )
}