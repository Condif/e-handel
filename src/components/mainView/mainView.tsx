import React from "react";
import ProductGrid from "./productGrid/productGrid";
import ProductView from "./productView/productView";

import { Switch, Route } from "react-router-dom";

function MainView() {
	return (
		<Switch>
			<Route exact path="/" component={ProductGrid} />
			<Route path="/productview/:serial" exact component={ProductView} />

			<Route>something went wrong</Route>
		</Switch>
	);
}

export default MainView;
