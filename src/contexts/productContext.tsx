import React from "react";

import { Product, NewProduct } from "../interfaces&types/interfaces";
import { ProductList } from "../components/productsAPI/productsAPI";

export const ProductContext = React.createContext<State>({
	products: ProductList,
	cart: [],

	deleteItem: () => {},
	itemTotal: {totalValue: 0, itemAmount: 0},
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

	deleteItem: (deleteThis: Product) => void;
	itemTotal: {totalValue: number, itemAmount: number}
	clearCart: () => void;
	addNewItem: (newProduct: NewProduct) => void;
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
			deleteItem: this.deleteItem,
			// cart: [],
			//Tillfällig fyllning av carten
			cart: this.generatePlaceholders(ProductList),
			itemTotal: {totalValue: 0, itemAmount: 0},
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
			}, () => this.setCartTotal());
		} else {
			const newCartItem = {
				product: product,
				amount: 1
			};
			this.setState({
				cart: [...this.state.cart, newCartItem]
			}, () => this.setCartTotal());
		}
	};

	calculateCartTotal = () => {
		let totalValue: number = 0
		let itemAmount: number = 0
		this.state.cart.forEach((item) => {			
			totalValue += item.product.price*item.amount
			itemAmount += item.amount
		})
		return {totalValue, itemAmount}
	}

	setCartTotal = () => {
		const itemTotal = this.calculateCartTotal()
		// const {totalValue, itemAmount} = itemTotal
		this.setState({
			itemTotal: itemTotal
		})
	}

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
		// console.log(product);
		this.state.cart.forEach(item => {
			if (item.product === product) {
				const updatedCart = this.state.cart;

				updatedCart.splice(this.state.cart.indexOf(item), 1);

				this.setState({
					cart: updatedCart
				}, () => this.setCartTotal());
			}
		});
	};

	clearCart = () => {
		this.setState({
			cart: []
		},() => this.setCartTotal());		
	};

	componentDidMount() {
		this.setCartTotal()
	}

	// - - - - ALL PRODUCTS
	addNewItem = (newProduct: NewProduct) => {
		console.log(newProduct);

		const product: Product = {
			...newProduct,
			serial: this.state.products.length + 1
		};

		this.setState({
			products: [...this.state.products, product]
		});
	};

	deleteItem = (deleteThis: Product) => {
		const updatedProductList = this.state.products;

		updatedProductList.splice(updatedProductList.indexOf(deleteThis), 1);

		this.setState({
			products: updatedProductList
		});
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
		this.setCartTotal()
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
		this.setCartTotal()
	}

	render() {
		return (
			<ProductContext.Provider value={this.state}>
				{this.props.children}
			</ProductContext.Provider>
		);
	}
}
