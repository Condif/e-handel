import React from "react";
import MainView from "../mainView/mainView";
import Footer from "../footer/footer";
// npm
import { CssBaseline, Button } from "@material-ui/core";
import Cart from "../cart/cart";
import { Product } from "../../interfaces&types/interfaces";

function Layout() {

	const [drawer, setDrawer] = React.useState(false)


	const toggleDrawer = (anchor: string, open: boolean) => {
		// console.log(state)
		setDrawer(!drawer);
	};

	//Callback funktion om cart ska synas i footer
	return (
		<div>
			<CssBaseline />
			<MainView/>
			<Footer
				isOpen={drawer}
				toggleDrawer={toggleDrawer}
			/>

			<Cart
				isOpen={drawer}
				toggleDrawer={toggleDrawer}
			/>
		</div>
	);
}

export default Layout;
