import React from "react";

import { ProductCard, ProductPage, ProductCart, ProductCheckout } from "./shapes";

import { Product } from "../../interfaces&types/interfaces";
import { Shape } from "../../interfaces&types/types";

interface Props {
	product: Product;
	productShape: Shape;
	amount?: number
}

export default function ProductFactory(props: Props) {
	switch (props.productShape) {
		case "card":
			return <ProductCard product={props.product} />;
		case "cart":
			return <ProductCart product={props.product} amount={props.amount} />;
		case "checkout":
			return <ProductCheckout product={props.product} amount={props.amount} />;
		case "listitem":
			return <div>listItem</div>;
		case "fullpage":
			return <ProductPage product={props.product} />;
	}
}
