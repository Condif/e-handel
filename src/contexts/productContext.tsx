import React from "react";

import { Product, NewProduct } from "../interfaces&types/interfaces";
import { ProductList } from "../components/productsAPI/productsAPI";

export const ProductContext = React.createContext<State>({
	products: ProductList,
	cart: [],

	deleteItem: () => {},
	itemTotal: {totalValue: 0, itemAmount: 0},
	editItem: () => {},
	addNewItem: () => {},
	addToCart: () => {},
	removeFromCart: () => {},
	clearCart: () => {},
	removeFromCounter: () => {},
	addToCounter: () => {}
});

interface Props {}
interface State {
	products: Product[];
	cart: { product: Product; amount: number }[];
	itemTotal: {totalValue: number, itemAmount: number}

	addNewItem: (newProduct: NewProduct) => void;
	deleteItem: (deleteThis: Product) => void;
	editItem: (oldItem: Product, updatedItem: NewProduct) => void;

	addToCart: (product: Product) => void;
	removeFromCart: (product: Product) => void;
	clearCart: () => void;

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
			itemTotal: {totalValue: 0, itemAmount: 0},

			addNewItem: this.addNewItem,
			deleteItem: this.deleteItem,
			editItem: this.editItem,

			addToCart: this.addToCart,
			removeFromCart: this.removeFromCart,
			clearCart: this.clearCart,
			
			removeFromCounter: this.removeFromCounter,
			addToCounter: this.AddToCounter
		};
	}
	// - - - - CART
	addToCart = (product: Product) => {
		let existingProduct: { product: Product; amount: number } | undefined;
		this.state.cart.forEach(item => {
			if (item.product === product) {
				existingProduct = item;
			}
		});
		if (existingProduct) {
			const updatedCart = this.state.cart;
			const updatedItem = existingProduct;
			const updatedAmount = updatedItem.amount + 1;
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
		let productArray: { product: Product; amount: number }[] = [];
		ProductList.forEach(product => {
			const newCartItem = {
				product: product,
				amount: 1
			};
			productArray.push(newCartItem);
		});
		return productArray;
	}

	removeFromCart = (product: Product) => {
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

		const product: Product = {
			...newProduct,
			serial: this.state.products.length + 1
		};

		this.setState({
			products: [...this.state.products, product]
		});
	};
	editItem = (oldItem: Product, updatedItem: NewProduct) => {
		const updatedProductList = this.state.products;
		const editedItem: Product = {
			name: updatedItem.name != "" ? updatedItem.name : oldItem.name,
			desc: updatedItem.desc != "" ? updatedItem.desc : oldItem.desc,
			img: updatedItem.img != "" ? updatedItem.img : oldItem.img,
			price: updatedItem.price != 0 ? updatedItem.price : oldItem.price,
			serial: oldItem.serial
		};

		updatedProductList.splice(
			updatedProductList.indexOf(oldItem),
			1,
			editedItem
		);
		this.setState({
			products: updatedProductList
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
			} else if (product === item.product) {
				const updatedCart = this.state.cart;
				const updatedAmount = item.amount - 1;

				updatedCart.splice(this.state.cart.indexOf(item), 1, {
					product: item.product,
					amount: updatedAmount
				});

				this.setState({
					cart: updatedCart
				});
			}
		});
		this.setCartTotal()
	}

	AddToCounter = (product: Product) => {
		this.state.cart.forEach(item => {
			if (item.amount < 1 && product === item.product) {
				this.addToCart(product);
			} else if (product === item.product) {
				const updatedCart = this.state.cart;
				const updatedAmount = item.amount + 1;

				updatedCart.splice(this.state.cart.indexOf(item), 1, {
					product: item.product,
					amount: updatedAmount
				});

				this.setState({
					cart: updatedCart
				});
			}
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
