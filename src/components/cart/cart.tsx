import React from "react";
// import {  Theme, createStyles } from "@material-ui/core/styles";
import { Drawer, Button, Divider, List, makeStyles, Container, BottomNavigationAction } from "@material-ui/core";
import { ProductList } from "../mockProducts/products";
import CardFactory from "../cardFactory/cardFactory";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

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
                        <CardFactory product={ProductList[0]} />
                </Container>
            </List>
            <Divider />
            <List></List>
        </div>
    );
    return (
        <div>
            <React.Fragment>
                <ShoppingCartIcon onClick={toggleDrawer(anchor, true)} />
                <Drawer
                    anchor={anchor} open={state[anchor]}>
                    <Button onClick={toggleDrawer(anchor, false)}>{'Icon'}</Button>
                    {list(anchor)}
                </Drawer>
            </React.Fragment>
        </div>
    )
}