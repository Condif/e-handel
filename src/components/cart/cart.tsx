import React from "react";
// import {  Theme, createStyles } from "@material-ui/core/styles";
import {
	Drawer,
	makeStyles,
	Typography,
	Grid,
	createStyles,
	Theme
} from "@material-ui/core";
import ProductFactory from "../productFactory/productFactory";
import CloseIcon from "@material-ui/icons/Close";
import { ProductContext } from "../../contexts/productContext";
import ContextButton from "../contextButton/contextButton";

const useStyles = makeStyles((theme: Theme) =>
createStyles({
	list: {
		marginTop: '4rem',
		width: "25rem",
		maxWidth: "100vw",
		padding: "1rem"
	},
	header: {
		margin: theme.spacing(0,4)
	},
	closeIcon: {
		height: '100%',
		marginLeft: '1rem',
		fontSize: 'large'
	},
	headerWrapper: {
		width: '100%',
		height: '4rem',
		position: 'fixed',
		zIndex: 1,
		backgroundColor: '#FFFFFF',
		display: 'flex',
		alignItems: 'center',
		boxShadow: '0px 5px 5px -2px rgba(0,0,0,0.1)',
		MozBoxShadow: '0px 5px 5px -2px rgba(0,0,0,0.1)',
		WebkitBoxShadow: '0px 5px 5px -2px rgba(0,0,0,0.1)',
	}
}));

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
							{value.cart.map(item => (
								<ProductFactory
									key={item.product.serial}
									product={item.product}
									amount={item.amount}
									productShape="cart"
								/>
							))}
						</Grid>
					</Grid>
				</div>
			)}
		</ProductContext.Consumer>
	)

	return (
		<div>
			<Drawer
				anchor='right'
				open={props.isOpen}>
				<div className={classes.headerWrapper}>
					<CloseIcon className={classes.closeIcon} onClick={() => props.toggleDrawer('right', false)} />
					<Typography className={classes.header} variant="h4">Cart</Typography>
					<ContextButton shape="clearCart" />
				</div>
				{list()}
			</Drawer>
		</div>
	);
}
