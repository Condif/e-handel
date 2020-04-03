import React from 'react'
import { Typography, List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles';
import { ProductContext } from '../../../../contexts/productContext';
import ProductFactory from '../../../productFactory/productFactory';
import { Product } from '../../../../interfaces&types/interfaces';
import { ProductList } from '../../../productsAPI/productsAPI';

interface Props {
    productList: { product: Product, amount: number }[]
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
    },
    list: {
        width: "100%",
        height: '100%',
    },
    title: {
        margin: theme.spacing(0, 0, 2),
    },
}));

export default function ItemOverview(props: Props) {
    const classes = useStyles();

    return (
        <>
            <Typography variant="h5" className={classes.title}>
                Your items
            </Typography>
            <div className={classes.list} role="presentation">
                {
                    props.productList.map(item => (
                        <ProductFactory
                            key={item.product.serial}
                            product={item.product}
                            amount={item.amount}
                            productShape="checkout"
                        />
                    ))
                }
            </div>
        </>
    )
}