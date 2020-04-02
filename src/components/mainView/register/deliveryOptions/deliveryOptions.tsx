import React from 'react'
import { Typography, List } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles';
import { DeliveryTypes, DeliveryOption } from './deliveryAPI'
import RegisterListItem from '../registerListItem/registerListItem';
import { PaymentOption } from '../paymentOptions/paymentAPI';

interface Props {
    selectedDelivery: DeliveryOption 
    setSelectedDelivery: (value: DeliveryOption | PaymentOption) => void
}

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

export default function DeliveryOptions(props: Props) {
    const classes = useStyles();

    return (
        <>
            <Typography variant="h5" className={classes.title}>
                Delivery
            </Typography>
            <div className={classes.demo}>
                <List component="nav" aria-label="Delivery Methods">
                    {DeliveryTypes.map((element: DeliveryOption) =>
                        <RegisterListItem 
                            key={element.name}
                            selectedIndex={props.selectedDelivery}
                            identifier={element}
                            handleListItemClick={props.setSelectedDelivery}
                            // name={element.name}
                            // desc={element.desc}
                            delTime={element.deliveryTime}
                            // price={element.price}
                        />
                    )}
                </List>
            </div>
        </>
    )
}