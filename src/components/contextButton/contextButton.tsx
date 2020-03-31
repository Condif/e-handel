import React from "react";
import { ProductContext } from "../../contexts/productContext";
import DeleteIcon from "@material-ui/icons/Delete";
import { Product } from "../../interfaces&types/interfaces";

interface Props {
	product?: any;
	shape: string;
}

function ContextButton(props: Props) {
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
