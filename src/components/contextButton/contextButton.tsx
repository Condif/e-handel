import React from "react";
import { ProductContext } from "../../contexts/productContext";
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles, Theme, createStyles } from "@material-ui/core";

interface Props {
	product?: any;
	shape: string;
}

const useStyles = makeStyles((theme: Theme) => 
	createStyles({
		removeFromCart: {
			// padding: theme.spacing(.5),
			position: 'absolute',
			width: '1.5rem',
			height: '1.5rem',
			top: '1rem',
			right: '.5rem',
			// top: '-.2rem',
			// right: '-.2rem',
			// fontSize: "small", 
			// background: '#DC004E',
			// color: 'white',
			color: '#d3d3d3',
			// borderRadius: '1rem'
		}
	})
)

function ContextButton(props: Props) {
	const classes = useStyles()
	switch (props.shape) {
		case "addToCart":
			return (
				<ProductContext.Consumer>
					{value => (
						<button onClick={() => value.addToCart(props.product)}>
							add to cart
						</button>
					)}
				</ProductContext.Consumer>
			);
		case "clearCart":
			return (
				<ProductContext.Consumer>
					{value => <button onClick={value.clearCart}>clearCart</button>}
				</ProductContext.Consumer>
			);
		case "removeFromCart":
			return (
				<ProductContext.Consumer>
					{value => (
						<DeleteIcon
						className={classes.removeFromCart}
						onClick={() => value.removeFromCart(props.product)}
					/>
						// <button onClick={() => value.removeFromCart(props.product)}>
						// 	removeFromCart
						// </button>
					)}
				</ProductContext.Consumer>
			);
		default:
			return null;
	}
}

export default ContextButton;
