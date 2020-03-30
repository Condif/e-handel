import React from "react";

import { Product } from "../interfaces&types/interfaces";
import { ProductList } from "../components/productsAPI/productsAPI";

export const ProductContext = React.createContext<State>({
	products: ProductList,
	cart: [],
	removeLastItem: () => {},
	addNewItem: () => {},
	addToCart: () => {},
	removeFromCart: () => {},
	clearCart: () => {}
});

interface Props {}
interface State {
	products: Product[];
	cart: { product: Product; amount: number }[];
	removeLastItem: () => void;
	clearCart: () => void;
	addNewItem: (newProduct: Product) => void;
	addToCart: (product: Product) => void;
	removeFromCart: (product: Product) => void;
}

export class ProductProvider extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);

		this.state = {
			products: ProductList,
			// cart: [],
			//Tillfällig fyllning av carten
			cart: this.generatePlaceholders(ProductList),
			removeLastItem: this.removeLastItem,
			addNewItem: this.addNewItem,
			addToCart: this.addToCart,
			removeFromCart: this.removeFromCart,
			clearCart: this.clearCart
		};
	}
	// - - - - CART
	addToCart = (product: Product) => {
		if (this.state.cart.length === 0) {
			const newCartItem = {
				product: product,
				amount: 1
			};
			this.setState({
				cart: [...this.state.cart, newCartItem]
			});
		} else {
			this.state.cart.forEach(item => {
				if (item.product === product) {
					const updatedCart = this.state.cart;
					const updatedAmount = item.amount + 1;

					updatedCart.splice(this.state.cart.indexOf(item), 1, {
						product: item.product,
						amount: updatedAmount
					});

					this.setState({
						cart: updatedCart
					});
				} else {
					const newCartItem = {
						product: product,
						amount: 1
					};
					this.setState({
						cart: [...this.state.cart, newCartItem]
					});
				}
			});
		}
	};

	//Tillfällig funktion som fyller carten
	generatePlaceholders(ProductList: Product[]) {
		let productArray: { product: Product; amount: number }[] = []
		ProductList.forEach(product => {
			const newCartItem = {
				product: product,
				amount: 1
			};
			productArray.push(newCartItem)
		});
		return productArray
	}

	removeFromCart = (product: Product) => {
		console.log(product);
		this.state.cart.forEach(item => {
			if (item.product === product) {
				const updatedCart = this.state.cart;

				updatedCart.splice(this.state.cart.indexOf(item), 1);

				this.setState({
					cart: updatedCart
				});
			}
		});
	};

	clearCart = () => {
		this.setState({
			cart: []
		});
	};

	// - - - - ALL PRODUCTS
	addNewItem = (newProduct: Product) => {
		this.setState({
			products: [...this.state.products, newProduct]
		});
	};

	removeLastItem = () => {
		const updatedProductList = this.state.products;
		updatedProductList.pop();

		this.setState(
			{
				products: updatedProductList
			},
			() => console.log(this.state)
		);
	};

	render() {
		return (
			<ProductContext.Provider value={this.state}>
				{this.props.children}
			</ProductContext.Provider>
		);
	}
}
