import React from "react";
import { ProductContext } from "../../contexts/productContext";
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import { makeStyles, Theme, createStyles, Button } from "@material-ui/core";

interface Props {
	product?: any;
	shape?: string;
	handleClick?: () => void;
	twoOnclickAlert?: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		removeFromCart: {
			position: 'absolute',
			width: '1.5rem',
			height: '1.5rem',
			top: '1rem',
			right: '.5rem',
			color: '#d3d3d3',
		},
		counterButtons: {
			color: '#d3d3d3'
		},
		clearCart: {
			position: 'fixed',
			right: '1rem',
			height: '2rem',
			boxShadow: 'none',
		}
	})
)

function twoOnclick(props: Props, addToCart: any) {
	if(props.handleClick) {
		props.handleClick()
	}
	addToCart(props.product)
	
}

function handleTwoOnclick(props: Props, addToCart: any) {
	
	//If productsite render alert on there otherwise render it in layout/add item to cart in both cases.
	if(props.twoOnclickAlert){
		props.twoOnclickAlert()
	}
	if(props.handleClick) {
		props.handleClick()
	}
	addToCart(props.product)
}

function ContextButton(props: Props) {
	const classes = useStyles()
	switch (props.shape) {
		case "addToCart":
			return (
					<ProductContext.Consumer>
						{value => (
							<button  onClick={() => twoOnclick(props, value.addToCart)}>
								add to cart
							</button>
						)}
					</ProductContext.Consumer>
			);
		case "productSiteAddToCart":
			return (
				<ProductContext.Consumer>
						
						{value => (
							
							<button  onClick={() => handleTwoOnclick(props, value.addToCart)}>
								add to cart
							</button>
						)}
				</ProductContext.Consumer>
			)
		case "addToCounter":
			return (
				<ProductContext.Consumer>
					{value => (
						<AddCircleOutlineIcon
							className={classes.counterButtons}
							onClick={() => value.addToCounter(props.product)} />
					)}
				</ProductContext.Consumer>
			);
		case "removeFromCounter":
			return (
				<ProductContext.Consumer>
					{value => (
						<RemoveCircleOutlineIcon
							className={classes.counterButtons}
							onClick={() => value.removeFromCounter(props.product)} />
					)}
				</ProductContext.Consumer>
			);
		case "clearCart":
			return (
				<ProductContext.Consumer>
					{value =>
					<Button className={classes.clearCart} variant="contained" size="small" onClick={value.clearCart}>
						<DeleteIcon fontSize="small" />
					Cart</Button>
					}
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
					)}
				</ProductContext.Consumer>
			);
			case "removeFromCart":
			return (
				<ProductContext.Consumer>
					{value => (
						<button onClick={() => value.removeFromCart(props.product)}>
							removeFromCart
						</button>
					)}
				</ProductContext.Consumer>
			);

		case "addNewItem":
			return (
				<ProductContext.Consumer>
					{value => (
						<button
							type="button"
							onClick={() => value.addNewItem(props.product)}>
							add new item
						</button>
					)}
				</ProductContext.Consumer>
			);

		case "deleteItem":
			return (
				<ProductContext.Consumer>
					{value => (
						<button
							type="button"
							onClick={() => value.deleteItem(props.product)}>
							<DeleteIcon />
						</button>
					)}
				</ProductContext.Consumer>
			);
		default:
			return null;
	}
}

export default ContextButton;
