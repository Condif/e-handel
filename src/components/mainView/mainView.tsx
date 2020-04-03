import React from "react";
import ProductGrid from "./productGrid/productGrid";
import ProductView from "./productView/productView";
import ReceiptView from "./register/receipt/receiptView";

import { Switch, Route, Redirect } from "react-router-dom";
import { Product, Receipt } from "../../interfaces&types/interfaces";
import Register from "./register/register";
import { ProductContext } from "../../contexts/productContext";

interface Props {
	handleClick?: () => void;
	handleClose?: () => void;
	setRegisterValue: (value: boolean) => void;
}
interface State {
	receipt: Receipt | null;
	confirmedPurchase: boolean
}
const product: Product[] = [];
class MainView extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			receipt: null,
			confirmedPurchase: false,
		};
	}

	mockAPICall = () => {
		return new Promise(resolve => {
			setTimeout(() => {
				resolve(true);
			}, 3000);
		});
	}

	setConfirmedPurchase = async () => {
		const result = await this.mockAPICall();

		if (typeof result === 'boolean') {
			this.setState({
				confirmedPurchase: result
			})
		}
	}

	handleConfirmReceipt = async (receipt: Receipt) => {
		await this.setConfirmedPurchase()
		this.setState({
			receipt: receipt,
			confirmedPurchase: false
		}, () => console.log(this.state.receipt)
		);
	};

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
					{this.state.confirmedPurchase ? <Redirect to="/receipt" /> :
						<ProductContext.Consumer>
							{value => (
								<Register
									setRegisterValue={this.props.setRegisterValue}
									productList={value.cart}
									confirmReceipt={this.handleConfirmReceipt}
								/>
							)}
						</ProductContext.Consumer>
					}
				</Route>

				<Route path="/receipt">
					<ReceiptView receipt={this.state.receipt} />
				</Route>
				<Route>something went wrong</Route>
			</Switch>
		);
	}
}

export default MainView;
