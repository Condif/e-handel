import React from 'react'
import { ListItem, Radio, ListItemText, Collapse, List, makeStyles, Theme } from '@material-ui/core'
import { PaymentOption } from '../paymentOptions/paymentAPI';
import { DeliveryOption } from '../deliveryOptions/deliveryAPI';

interface Props {
    selectedIndex: PaymentOption | DeliveryOption
    identifier: PaymentOption | DeliveryOption
    handleListItemClick: (identifier: PaymentOption | DeliveryOption) => void
    delTime?: string
}

const useStyles = makeStyles((theme: Theme) => ({
    nested: {
        width: '100%',
        padding: theme.spacing(0, 4, 2, 4),
    },
}));

export default function RegisterListItem(props: Props) {
    const classes = useStyles();
    const { selectedIndex, identifier, handleListItemClick, delTime } = props
    const name = identifier.name
    const desc = identifier.desc
    const price = identifier.price

    return (
        <>
            <ListItem
                button
                selected={selectedIndex === identifier}
                onClick={() => handleListItemClick(identifier)}
            >
                <Radio
                    checked={selectedIndex === identifier}
                    onChange={() => handleListItemClick(identifier)}
                    color="default"
                    name="OptionOne"
                />
                <ListItemText primary={name} secondary={(selectedIndex !== identifier) ? delTime : null} />
                <ListItemText
                    style={{
                        textAlign: "right"
                    }}
                    primary={`${(typeof price === 'number') ? `${price}:-` : ``}`}
                />
            </ListItem>
            <Collapse in={(selectedIndex === identifier)} timeout="auto" unmountOnExit style={{width: '100%'}}>
                <List component="div" disablePadding style={{width: '100%'}}>
                    <ListItem selected className={classes.nested}>
                        <ListItemText primary={`${desc}. ${(delTime) ? ` ${delTime}.` : `` }`} />
                    </ListItem>
                </List>
            </Collapse>
        </>
    )
}