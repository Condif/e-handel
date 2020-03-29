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
	addNewItem: (newProduct: Product) => void;
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
