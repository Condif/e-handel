import React from 'react'
import { Typography, List } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles';
import { DeliveryTypes, Delivery } from './deliveryAPI'
import RegisterListItem from '../registerListItem/registerListItem';

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

export default function DeliveryOptions() {
    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleListItemClick = (
    //   event: React.MouseEvent<HTMLDivElement, MouseEvent> | React.ChangeEvent<HTMLInputElement>,
      index: number | string,
    ) => {
        (typeof index === 'number') ? setSelectedIndex(index) : console.log(index);
        
    };

    return (
        <>
            <Typography variant="h5" className={classes.title}>
                Delivery
            </Typography>
            <div className={classes.demo}>
                <List component="nav" aria-label="Delivery Methods">
                    {DeliveryTypes.map((element: Delivery, index) =>
                        <RegisterListItem 
                            key={element.name}
                            selectedIndex={selectedIndex}
                            identifier={index}
                            handleListItemClick={handleListItemClick}
                            name={element.name}
                            desc={element.desc}
                            delTime={element.deliveryTime}
                            price={element.price}
                        />
                    )}
                </List>
            </div>
        </>
    )
}