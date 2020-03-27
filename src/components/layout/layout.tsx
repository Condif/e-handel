import React from "react";

import MainView from "../mainView/mainView";
import Footer from "../footer/footer";
// npm
import { CssBaseline, Button } from "@material-ui/core";
import Cart from "../cart/cart";

function Layout() {
	const [state, setState] = React.useState({
		right: false,
		cartList: [{}],
    })
	const toggleDrawer = (anchor: string, open: boolean) => {
		console.log(state)
		setState({ ...state, [anchor]: open });
		
    };
	//Callback funktion om cart ska synas i footer
	return (
		<div>
			<CssBaseline />
			<MainView />
			<Footer 
			isOpen={state.right}
			toggleDrawer={toggleDrawer}
			/>
			
			<Cart 
			isOpen={state.right}
			toggleDrawer={toggleDrawer}
			/>
		</div>
	);
}

export default Layout;
