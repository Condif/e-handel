import React from "react";
// import {  Theme, createStyles } from "@material-ui/core/styles";
import {
	Drawer,
	makeStyles,
	Typography,
	Grid
} from "@material-ui/core";
import ProductFactory from "../productFactory/productFactory";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import CloseIcon from "@material-ui/icons/Close";
import { ProductContext } from "../../contexts/productContext";
import ContextButton from "../contextButton/contextButton";

const useStyles = makeStyles({
	list: {
		width: "25rem",
		maxWidth: "100vw",

		padding: "1rem"
	}
});

interface Props {
	isOpen: boolean;
	toggleDrawer: (anchor: string, open: boolean) => void;
}
export default function Cart(props: Props) {
	const classes = useStyles();

	const list = () => (
		<ProductContext.Consumer>
			{value => (
				<div className={classes.list} role="presentation">
					<Grid container>

						<Grid item xs={12}>
							<Typography variant="h4">cart</Typography>
						</Grid>

						<Grid item xs={12}>
							{value.cart.map(item => (
								<ProductFactory
									key={item.product.serial}
                                    product={item.product}
                                    amount={item.amount}
									productShape="cart"
								/>
							))}
						</Grid>

                        <Grid item xs={12}>
                            <ContextButton shape="clearCart" />
                        </Grid>

					</Grid>
				</div>
			)}
		</ProductContext.Consumer>
	)

	return (
		<div>
			<ShoppingCartIcon onClick={() => props.toggleDrawer('right', false)} />
            <Drawer
                anchor='right'
                open={props.isOpen}>
                <CloseIcon style={{ height: "2rem", fontSize: 'large'}} onClick={() => props.toggleDrawer('right', false)} />
                {list()}
            </Drawer>
		</div>
	);
}
