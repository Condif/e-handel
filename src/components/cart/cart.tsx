import React from "react";
// import {  Theme, createStyles } from "@material-ui/core/styles";
import {
	Drawer,
	makeStyles,
	Typography,
	Grid,
	createStyles,
	Theme,
	Button
} from "@material-ui/core";
import ProductFactory from "../productFactory/productFactory";
import CloseIcon from "@material-ui/icons/Close";
import { ProductContext } from "../../contexts/productContext";
import ContextButton from "../contextButton/contextButton";
import TotalDisplay from "../totalDisplay/totalDisplay"

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		list: {
			width: "25rem",
			maxWidth: "100vw",
			padding: "1rem"
		},
		listWrapper: {
			position: 'relative',
			height: 'calc(100% - 11rem)',
			top: '4rem',
			width: '100%',
			overflowY: 'auto'
		},
		header: {
			margin: theme.spacing(0, 4)
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
		},
		totalWrapper: {
			width: '100%',
			height: '7rem',
			position: 'absolute',
			bottom: '0',
			left: '50%',
			transform: 'translateX(-50%)',
			zIndex: 1,
			backgroundColor: '#FFFFFF',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'space-evenly',
			boxShadow: '0px -5px 5px -2px rgba(0,0,0,0.1)',
			MozBoxShadow: '0px -5px 5px -2px rgba(0,0,0,0.1)',
			WebkitBoxShadow: '0px -5px 5px -2px rgba(0,0,0,0.1)',
		},
		buyButton: {
			width: '60%',
			marginBottom: '1rem'
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
					{value.cart.map(item => (
						<ProductFactory
							key={item.product.serial}
							product={item.product}
							amount={item.amount}
							productShape="cart"
						/>
					))}
				</div>
			)}
		</ProductContext.Consumer>
	)

	const cartTotal = () => (
		<ProductContext.Consumer>
			{value => (
				<div className={classes.totalWrapper}>
					<TotalDisplay itemTotal={value.itemTotal} />
					{(value.itemTotal.itemAmount != 0) 
					? <Button className={classes.buyButton} variant="contained" color="primary">
						BUY
					</Button>
					: <Button className={classes.buyButton} variant="contained" disabled>
						add items
				  	</Button>
					}
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
				<div className={classes.listWrapper}>
					{list()}

				</div>
				<div className={classes.totalWrapper}>
					{cartTotal()}
				</div>
			</Drawer>
		</div>
	);
}
