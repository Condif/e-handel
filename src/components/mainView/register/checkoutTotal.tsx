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
            <p>{`${props.itemTotal.itemAmount} Items, excl. VAT: ${props.itemTotal.totalValue*.8}:-`}</p>
            <p>{`Shipping: ${props.delivery.price}:-`}</p>
            <p>{`Total: ${(typeof props.delivery.price === "number") ? (props.itemTotal.totalValue + props.delivery.price) : null}`}</p>
            {/* <p>{props.payment.name}</p> */}
        </>
    )
}