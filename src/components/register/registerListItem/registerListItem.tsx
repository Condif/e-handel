import React from 'react'
import { ListItem, Radio, ListItemText, Collapse, List, makeStyles, Theme } from '@material-ui/core'

interface Props {
    selectedIndex: number | string
    identifier: number | string
    handleListItemClick: (indentifier: number | string) => void
    name: string
    desc: string
    delTime?: string
    price: number | string

}

const useStyles = makeStyles((theme: Theme) => ({
    nested: {
        padding: theme.spacing(0, 4, 2, 4),
    },
}));

export default function RegisterListItem(props: Props) {
    const classes = useStyles();
    const { selectedIndex, identifier, handleListItemClick, name, desc, delTime, price } = props

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
                    primary={`${price}${(typeof price === 'number') ? `:-` : ``}`}
                />
            </ListItem>
            <Collapse in={(selectedIndex === identifier)} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem selected className={classes.nested}>
                        <ListItemText primary={`${desc} ${(delTime) ? `within ${delTime}.` : `` }`} />
                    </ListItem>
                </List>
            </Collapse>
        </>
    )
}