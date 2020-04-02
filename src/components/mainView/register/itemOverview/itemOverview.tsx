import React from 'react'
import { Typography, List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles';
import { ProductContext } from '../../../../contexts/productContext';
import ProductFactory from '../../../productFactory/productFactory';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
    },
    list: {
        width: "25rem",
        maxWidth: "100vw",
        padding: "1rem",
        height: '100%',
    },
    title: {
        margin: theme.spacing(0, 0, 2),
    },
}));

export default function ItemOverview() {
    const classes = useStyles();

    return (
        <>
            <Typography variant="h5" className={classes.title}>
                Your items
            </Typography>
            <ProductContext.Consumer>
                {value => (
                    <div className={classes.list} role="presentation">
                        {
                                value.cart.map(item => (
                                    <ProductFactory
                                        key={item.product.serial}
                                        product={item.product}
                                        amount={item.amount}
                                        productShape="checkout"
                                    />
                                ))
                        }
                    </div>
                )}
            </ProductContext.Consumer>
        </>
    )
}