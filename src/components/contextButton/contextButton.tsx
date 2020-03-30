import React from "react";
import { ProductContext } from "../../contexts/productContext";

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
		case "addToCounter":
		return (
			<ProductContext.Consumer>
				{value => (
					<button onClick={() => value.addToCounter(props.product)}>
						+
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
		case "removeFromCounter":
			return (
				<ProductContext.Consumer>
					{value => (
						<button onClick={() => value.removeFromCounter(props.product)}>
							-
						</button>
					)}
				</ProductContext.Consumer>
			);
		default:
			return null;
	}
}

export default ContextButton;
