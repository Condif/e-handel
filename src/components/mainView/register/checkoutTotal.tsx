import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core'
import { DeliveryOption, baseDelivery } from './deliveryOptions/deliveryAPI';
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
            <p>{`${props.itemTotal.itemAmount} Items: excl. VAT: ${(props.itemTotal.totalValue*.8).toFixed(2)}:-`}</p>
            <p>{`VAT: +${(props.itemTotal.totalValue*.2).toFixed(2)}:-`}</p>
            <p>{(props.delivery != baseDelivery) ?
                    `Shipping: +${props.delivery.price}:-`
                    : `No delivery option chosen`
                }
            </p>
            <p>{`Total: ${(typeof props.delivery.price === "number") ? (props.itemTotal.totalValue + props.delivery.price).toFixed(2) : null}`}</p>
            {/* <p>{props.payment.name}</p> */}
        </>
    )
}