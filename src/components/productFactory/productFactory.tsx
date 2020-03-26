import React from "react";

import { ProductCard, ProductPage } from "./shapes";

import { Product } from "../../interfaces&types/interfaces";
import { Shape } from "../../interfaces&types/types";

interface Props {
	product: Product;
	productShape: Shape;
}

export default function ProductFactory(props: Props) {
	switch (props.productShape) {
		case "card":
			return <ProductCard product={props.product} />;
		case "cart":
			return <div>cart</div>;
		case "listitem":
			return <div>listItem</div>;
		case "fullpage":
			return <ProductPage product={props.product} />
		
	}
}
