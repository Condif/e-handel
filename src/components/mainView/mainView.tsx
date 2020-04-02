import React from "react";
import ProductGrid from "./productGrid/productGrid";
import ProductView from "./productView/productView";
import ReceiptView from "./register/receipt/receiptView";

import { Switch, Route } from "react-router-dom";
import { Product } from "../../interfaces&types/interfaces";
import Register from "./register/register";

interface Props {
	handleClick?: () => void;
	handleClose?: () => void;
	setRegisterValue: (value: boolean) => void;
}
interface State {
	products: Product[];
}
const product: Product[] = [];
class MainView extends React.Component<Props, State> {
	render() {
		return (
			<Switch>
				<Route exact path="/">
					<ProductGrid handleClick={this.props.handleClick} />
				</Route>

				<Route
					path="/productview/:serial"
					render={props => (
						<ProductView
							{...props}
							handleClick={this.props.handleClick}
							handleClose={this.props.handleClose}
							product={product}
						/>
					)}
				/>
				<Route path="/register">
					<Register setRegisterValue={this.props.setRegisterValue} />
				</Route>
				<Route path="/receipt">
					<ReceiptView />
				</Route>

				<Route>something went wrong</Route>
			</Switch>
		);
	}
}

export default MainView;
