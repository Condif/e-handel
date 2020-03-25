import React from "react";
// import {  Theme, createStyles } from "@material-ui/core/styles";
import { Drawer, Button, Divider, List, makeStyles, Container } from "@material-ui/core";
import CardMaker from "../cardMaker/cardMaker";
import { ProductList } from "../mockProducts/products";

const anchor = 'right'
const useStyles = makeStyles({
    list: {
        width: "40vw",
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
        >
            <List>
                <Container>
                        <CardMaker key={"1"} product={ProductList[0]}></CardMaker>
                </Container>
            </List>
            <Divider />
            <List></List>
        </div>
    );
    return (
        <div>
            <React.Fragment>
                <Button onClick={toggleDrawer(anchor, true)}>{'Icon'}</Button>
                <Drawer
                    anchor={anchor} open={state[anchor]}>
                    <Button onClick={toggleDrawer(anchor, false)}>{'Icon'}</Button>
                    {list(anchor)}
                </Drawer>
            </React.Fragment>
        </div>
    )
}