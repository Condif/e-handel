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

const anchor = "right";
const useStyles = makeStyles({
	list: {
		width: "25vw",
		minWidth: "20rem",

		padding: "1rem"
	}
});
export default function Cart() {
	const classes = useStyles();
	const [state, setState] = React.useState({
		right: false
	});

	const toggleDrawer = (anchor: any, open: any) => (event: any) => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const list = (anchor: any) => (
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
			<ShoppingCartIcon onClick={toggleDrawer(anchor, true)} />
			<Drawer anchor={anchor} open={state[anchor]}>
				<CloseIcon
					style={{ height: "2rem", fontSize: "large" }}
					onClick={toggleDrawer(anchor, false)}
				/>
				{list(anchor)}
			</Drawer>
		</div>
	);
}
