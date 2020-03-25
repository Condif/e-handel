import React from 'react'
import { Typography, List, ListItem, ListItemText, ListItemIcon, Radio } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles';
import { DeliveryTypes, Delivery } from './deliveryAPI'

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
}));

export default function DeliveryOptions() {
    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleListItemClick = (
      event: React.MouseEvent<HTMLDivElement, MouseEvent> | React.ChangeEvent<HTMLInputElement>,
      index: number,
    ) => {
        setSelectedIndex(index);
    };

    return (
        <>
            <Typography variant="h5" className={classes.title}>
                Delivery
            </Typography>
            <div className={classes.demo}>
                <List component="nav" aria-label="Delivery Methods">
                    {DeliveryTypes.map((element: Delivery, index) =>
                        <ListItem
                        button
                        selected={selectedIndex === index}
                        onClick={event => handleListItemClick(event, index)}
                        >
                            <Radio
                                checked={selectedIndex === index}
                                onChange={event => handleListItemClick(event, index)}
                                color="default"
                                name="OptionOne"
                            />
                            <ListItemText primary={element.name}  secondary={(selectedIndex === index) ? element.desc : null}/>
                        </ListItem>
                    )}
                </List>
            </div>
        </>
    )
}