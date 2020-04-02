import React from "react";
import MainView from "../mainView/mainView";
import { CssBaseline } from "@material-ui/core";
import Cart from "../cart/cart";
import { AdminContext } from "../../contexts/admin";
import Topbar from "../topbar/topbar";

function Layout() {
	const [drawer, setDrawer] = React.useState(false);

	const toggleDrawer = (anchor: string, open: boolean) => {
		// console.log(state)
		setDrawer(!drawer);
	};

	//Callback funktion om cart ska synas i footer
	return (
		<>
			<CssBaseline />

			<Topbar isOpen={drawer} toggleDrawer={toggleDrawer} />
			<MainView />

			<Cart isOpen={drawer} toggleDrawer={toggleDrawer} />
		</>
	);
}

export default Layout;
