import React from "react";
import { ProductList } from "../mockProducts/productsAPI";
import MainView from "../mainView/mainView";
import Footer from "../footer/footer";
// npm
import { CssBaseline, Button } from "@material-ui/core";
import Cart from "../cart/cart";
import { Product } from "../../interfaces&types/interfaces";

function Layout() {

	const [drawer, setDrawer] = React.useState(false)

	const [cartList, setCartList] = React.useState(
		[]
	)

	const toggleDrawer = (anchor: string, open: boolean) => {
		// console.log(state)
		setDrawer(!drawer);
	};

	const addToCart = (value: Product) =>  {
		setCartList(cartList)
	}

	//Callback funktion om cart ska synas i footer
	return (
		<div>
			<CssBaseline />
			<MainView
				 addToCart={addToCart}
			/>
			<Footer
				isOpen={drawer}
				toggleDrawer={toggleDrawer}
			/>

			<Cart
				newCartList={cartList}
				isOpen={drawer}
				toggleDrawer={toggleDrawer}
			/>
		</div>
	);
}

export default Layout;
