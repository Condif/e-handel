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
	clearCart: () => {},
	removeFromCounter: () => {},
	addToCounter: () => {},
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
	removeFromCounter: (product: Product) => void;
	addToCounter: (product: Product) => void;
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
			clearCart: this.clearCart,
			removeFromCounter: this.removeFromCounter,
			addToCounter: this.AddToCounter
		};
	}
	// - - - - CART
	addToCart = (product: Product) => {
		let existingProduct: {product: Product, amount: number} | undefined;
		this.state.cart.forEach(item => {
			if (item.product === product) {
				existingProduct = item
			}
		});
		if (existingProduct) {
			const updatedCart = this.state.cart;
			const updatedItem = existingProduct
			const updatedAmount = updatedItem.amount + 1
			updatedCart.splice(this.state.cart.indexOf(updatedItem), 1, {
				product: updatedItem.product,
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

	removeFromCounter = (product: Product) => {
		this.state.cart.forEach(item => {
			if (item.amount <= 1 && product === item.product) {
				this.removeFromCart(product);
			
			} else if(product === item.product) {
				const updatedCart = this.state.cart;
				const updatedAmount = item.amount - 1;

				updatedCart.splice(this.state.cart.indexOf(item), 1, {
					product: item.product,
					amount: updatedAmount
				});

				this.setState({
					cart: updatedCart
				})
			}; 
		});
	}

	AddToCounter = (product: Product) => {
		this.state.cart.forEach(item => {
			if (item.amount < 1 && product === item.product) {
				this.addToCart(product);
			
			} else if(product === item.product) {
				const updatedCart = this.state.cart;
				const updatedAmount = item.amount + 1;

				updatedCart.splice(this.state.cart.indexOf(item), 1, {
					product: item.product,
					amount: updatedAmount
				});

				this.setState({
					cart: updatedCart
				})
			}; 
		});
	}

	render() {
		return (
			<ProductContext.Provider value={this.state}>
				{this.props.children}
			</ProductContext.Provider>
		);
	}
}
