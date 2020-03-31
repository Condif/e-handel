import React from "react";
import MainView from "../mainView/mainView";
import Footer from "../footer/footer";
import AdminControlls from "../adminControlls/adminControlls";
import { CssBaseline } from "@material-ui/core";
import Cart from "../cart/cart";

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
			<AdminControlls />
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
