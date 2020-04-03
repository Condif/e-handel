import React from "react";
import ProductGrid from "./productGrid/productGrid";
import ProductView from "./productView/productView";
import ReceiptView from "./register/receipt/receiptView";

import { Switch, Route } from "react-router-dom";
import { Product, Receipt } from "../../interfaces&types/interfaces";
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
		const template: Receipt = {
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
			CVC: "112",
			expiry: "04-24",
			cost: {
				subtotal: 1000,
				vat: 250
			},

			delivery: {
				type: "del",
				name: "Home delivery",
				desc: "Deliver to your front door",
				deliveryTime: "2-3 work days",
				price: 199
			},

			payment: {
				type: "pay",
				name: "paypal",
				desc: "Pay by invoice after purchase",
				price: "fee",
				options: {
					value: "KLA14",
					label: "14 day invoice"
				}
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
					<ReceiptView receipt={template} />
				</Route>

				<Route>something went wrong</Route>
			</Switch>
		);
	}
}

export default MainView;
