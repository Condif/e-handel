import React from "react";

import { Product } from "../interfaces&types/interfaces";
import { ProductList } from "../components/productsAPI/productsAPI";

export const ProductContext = React.createContext<State>({
	products: ProductList,
	cart: [],
	removeLastItem: () => {},
	addNewItem: () => {}
});

interface Props {}
interface State {
	products: Product[];
	cart: [];
	removeLastItem: () => void;
	addNewItem: () => void;
}

export class ProductProvider extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);

		// (window as any).localStorage.products = JSON.stringify(ProductList);
		this.state = {
			// products: JSON.parse((window as any).localStorage.products || "[]"),
			products: ProductList,
			cart: [],
			removeLastItem: this.removeLastItem,
			addNewItem: this.addNewItem
		};
		console.log(this.state);
	}

	addNewItem = () => {
		this.setState({
			products: [
				...this.state.products,
				{
					name: "munk",
					serial: 1,
					img:
						"https://images.unsplash.com/photo-1584727638096-042c45049ebe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=712&q=80",
					price: 10000,
					desc:
						"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure ea veritatis hic, vero fugit...",
					info: {
						sizes: ["xs", "sm", "md", "lg", "xl"],
						colors: ["red", "green", "blue", "orange"]
					}
				}
			]
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
