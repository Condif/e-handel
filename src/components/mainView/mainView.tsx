import React from "react";
import ProductGrid from "./productGrid/productGrid";
import ProductView from "./productView/productView";

import { Switch, Route } from "react-router-dom";
import { Product } from "../../interfaces&types/interfaces";
import Register from "./register/register";

interface Props {
	setRegisterValue: (value: boolean) => void
}
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
				<Route path="/register">
					<Register
						setRegisterValue={this.props.setRegisterValue}
					/>
				</Route>
				<Route>something went wrong</Route>
			</Switch>
		);
	}
}

export default MainView;
