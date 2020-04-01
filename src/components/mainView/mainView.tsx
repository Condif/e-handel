import React from "react";
import ProductGrid from "./productGrid/productGrid";
import ProductView from "./productView/productView";

import { Switch, Route } from "react-router-dom";
import { Product } from "../../interfaces&types/interfaces";

interface Props {
	handleClick?: () => void;
	handleClose?: () => void;
	alertIsOpen: boolean;
}
interface State {
	products: Product[];
}
const product: Product[] = [];
class MainView extends React.Component<Props, State> {
	
	render() {
		console.log('Mainview' + this.props.alertIsOpen);
		
		return (
			<Switch>
				
				<Route exact path="/">
					<ProductGrid handleClick={this.props.handleClick}/>
				</Route>

				<Route path="/productview/:serial" render={(props) => 
				<ProductView {...props} 
				handleClick={this.props.handleClick}
				alertIsOpen={this.props.alertIsOpen}
				handleClose={this.props.handleClose}
				product={product}
				/>}
				/>
					
				
				<Route>something went wrong</Route>
			</Switch>
		);
	}
}

export default MainView;
