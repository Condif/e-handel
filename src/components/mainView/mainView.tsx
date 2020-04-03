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
	validReceipt: boolean;
	receiptInformation: Receipt | false;
	confirmedPurchase: boolean
}
const product: Product[] = [];
class MainView extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			validReceipt: false,
			receiptInformation: false,
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

	render() {
		const template: Receipt = {
			alternate: true,

			firstName: "filip",
			altFirstName: "christian",
			lastName: "sunnemar",
			altLastName: "ahgren",

			mobileNumber: "0303-52559",
			altMobileNumber: "031-666420",

			address: "Dennadär Gatan 42",
			postal: "445 90",
			city: "Borås",
			cardNumber: "1111-1111-1111-1337",

			cost: {
				subtotal: 1000,
				vat: 250
			},

			delivery: {
				type: "del",
				name: "Home delivery",
				desc: "Deliver to your front door",
				deliveryTime: 2,
				price: 199
			},

			payment: {
				type: "pay",
				name: "card",
				desc: "Pay by invoice after purchase",
				price: "fee",
				options: false
			},

			cart: [
				{
					product: {
						name: "Small cactus",
						serial: 2,
						img:
							"https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEzMDA0fQ&auto=format&fit=crop&w=709&q=80",
						price: 49,
						desc:
							"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure ea veritatis hic, vero fugit..."
					},
					amount: 2
				},
				{
					product: {
						name: "Hanging plant",
						serial: 1,
						img:
							"https://images.unsplash.com/photo-1485902409384-e367af5b5c92?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
						price: 299,
						desc:
							"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure ea veritatis hic, vero fugit..."
					},
					amount: 1
				}
			]
		};
		return (
			<Switch>
				<Route exact path="/">
					<ProductGrid handleClick={this.props.handleClick} />
				</Route>

				<Route path="/productview/:serial" render={(props) =>
					<ProductView {...props}
						handleClick={this.props.handleClick}
						handleClose={this.props.handleClose}
						product={product}
					/>}
				/>
				{/* <Route path="/register"> */}
				<Route path="/register">
					{this.state.confirmedPurchase ? <Redirect to="/receipt" /> :
						<ProductContext.Consumer>
							{value => (
								<Register
									setRegisterValue={this.props.setRegisterValue}
									productList={value.cart}
									handlePurchaseClick={this.setConfirmedPurchase}
								/>
							)}
						</ProductContext.Consumer>
					}
				</Route>
				{/* </Route> */}
				<Route path="/receipt" >
					<ReceiptView receipt={template} />
				</Route>

				<Route>something went wrong</Route>
			</Switch>
		);
	}
}

export default MainView;
