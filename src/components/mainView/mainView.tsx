import React from "react";
import ProductGrid from "../productGrid/productGrid";
import ProductView from "../productView/productView";

import { Switch, Route } from "react-router-dom";
import { Product } from "../../interfaces&types/interfaces";
interface Props {
	addToCart: (value: Product) => void ;
}
function MainView(props: Props) {
	return (
		<Switch>
			<Route exact path="/" component={ProductGrid} addToCart={props.addToCart} />
			<Route path="/productview/:serial" exact component={ProductView} addToCart={props.addToCart}/>

			<Route>something went wrong</Route>
		</Switch>
	);
}

export default MainView;
