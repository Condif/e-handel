import React from "react";
import ProductGrid from "./productGrid/productGrid";
import ProductView from "./productView/productView";

import { Switch, Route } from "react-router-dom";
import { Product } from "../../interfaces&types/interfaces";

interface Props {
	handleClick?: () => void;
}
interface State {
	products: Product[];
}
class MainView extends React.Component<Props, State> {
	render() {
		return (
			<Switch>
				<Route exact path="/">
					<ProductGrid handleClick={this.props.handleClick}/>
				</Route>

				<Route path="/productview/:serial" exact component={ProductView} handleClick={this.props.handleClick} />

				<Route>something went wrong</Route>
			</Switch>
		);
	}
}

export default MainView;
