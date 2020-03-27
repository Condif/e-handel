import React, { useEffect } from "react";
import ProductGrid from "./productGrid/productGrid";
import ProductView from "./productView/productView";

import { Switch, Route } from "react-router-dom";
import { ProductList } from "../productsAPI/productsAPI";
import { Product } from "../../interfaces&types/interfaces";

interface Props {}
interface State {
	products: Product[];
}
class MainView extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			products: ProductList
		};
	}
	handleAddNewProduct =() => {
		console.log("hej");
		
	}

	render() {
		const newProduct: Product = {
			name: "munk",
			serial: this.state.products.length + 1,
			img:
				"https://images.unsplash.com/photo-1584727638096-042c45049ebe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=712&q=80",
			price: 10000,
			desc:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure ea veritatis hic, vero fugit...",
			info: {
				sizes: ["xs", "sm", "md", "lg", "xl"],
				colors: ["red", "green", "blue", "orange"]
			}
		};

		return (
			<Switch>
				<Route exact path="/">
					<ProductGrid
						addNewProduct={this.handleAddNewProduct}
						products={this.state.products}
					/>
				</Route>
				
				<Route path="/productview/:serial" exact component={ProductView} />

				<Route>something went wrong</Route>
			</Switch>
		);
	}
}

export default MainView;
