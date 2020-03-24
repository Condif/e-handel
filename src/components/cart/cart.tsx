import React from "react";
// import {  Theme, createStyles } from "@material-ui/core/styles";
import { Drawer, Button, Divider, List, makeStyles } from "@material-ui/core";

const anchor = 'right'
const useStyles = makeStyles({
    list: {
      width: 250,
    },
  });
export default function Cart() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        right: false,
    })

    const toggleDrawer = (anchor: any, open: any) => (event: any) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor: any) => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List></List>
            <Divider />
            <List></List>
        </div>
    );
    return (
        <div>
            <React.Fragment>
                <Button onClick={toggleDrawer(anchor, true)}>{'Icon'}</Button>
                <Drawer
                    anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                {list(anchor)}
                </Drawer>
            </React.Fragment>
        </div>
    )
}