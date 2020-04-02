import React from "react";

import {
	ProductCard,
	ProductPage,
	ProductCart,
	ProductCheckout,
	ProductReceipt
} from "./shapes";

import { Product } from "../../interfaces&types/interfaces";
import { Shape } from "../../interfaces&types/types";

interface Props {
	product: Product;
	productShape: Shape;
	amount?: number;
	handleClick?: () => void;
	twoOnclickAlert?: () => void;
}

export default function ProductFactory(props: Props) {
	switch (props.productShape) {
		case "card":
			return (
				<ProductCard product={props.product} handleClick={props.handleClick} />
			);
		case "cart":
			return <ProductCart product={props.product} amount={props.amount} />;
		case "checkout":
			return <ProductCheckout product={props.product} amount={props.amount} />;
		case "receipt":
			return <ProductReceipt product={props.product} amount={props.amount} />;
		case "fullpage":
			return (
				<ProductPage
					product={props.product}
					twoOnclickAlert={props.twoOnclickAlert}
				/>
			);
	}
}
