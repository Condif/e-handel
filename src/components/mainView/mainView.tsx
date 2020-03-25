import React from "react";
import ProductGrid from "../productGrid/productGrid";

import { Switch, Route } from "react-router-dom";

function MainView() {
	return (
		<Switch>
			<Route exact path="/">
				<ProductGrid />
			</Route>
			<Route path="/alt">
				<div style={{ padding: "2rem" }}>
					<h2>Alternative Route</h2>
					<hr />
					<p>Here either the productpage or the checkout will be added</p>
				</div>
			</Route>
		</Switch>
	);
}

export default MainView;
