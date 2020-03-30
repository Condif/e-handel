import React, { useEffect } from "react";
import ProductGrid from "./productGrid/productGrid";
import ProductView from "./productView/productView";

import { Switch, Route } from "react-router-dom";
import { ProductList } from "../productsAPI/productsAPI";
import { Product } from "../../interfaces&types/interfaces";

interface Props {}
interface State {
	products: Product[];
}
class MainView extends React.Component<Props, State> {
	render() {
		return (
			<Switch>
				<Route exact path="/">
					<ProductGrid />
				</Route>

				<Route path="/productview/:serial" exact component={ProductView} />

				<Route>something went wrong</Route>
			</Switch>
		);
	}
}

export default MainView;
