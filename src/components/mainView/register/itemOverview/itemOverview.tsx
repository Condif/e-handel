import React from 'react'
import { Typography, List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: theme.spacing(0, 0, 2),
    },
}));

function generate(element: React.ReactElement) {
    return [0, 1, 2].map(value =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

export default function ItemOverview() {
    const classes = useStyles();
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(true);

    return (
        <>
            <Typography variant="h5" className={classes.title}>
                Your items
            </Typography>
            <div className={classes.demo}>
                <List dense={dense}>
                    {generate(
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    {/* <FolderIcon /> */}
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                            primary="Single-line item"
                            secondary={secondary ? 'Secondary text' : null}
                            />
                        </ListItem>,
                    )}
                </List>
            </div>
        </>
    )
}