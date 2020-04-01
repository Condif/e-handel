import React from "react";
import MainView from "../mainView/mainView";
import Footer from "../footer/footer";
import AdminControlls from "../adminControlls/adminControlls";
import { CssBaseline } from "@material-ui/core";
import Cart from "../cart/cart";

function Layout() {

	const [drawer, setDrawer] = React.useState(false)
	const [register, setRegister] = React.useState(false)

	const setRegisterValue = (value: boolean) => {
		setRegister(value)	
	}

	const toggleDrawer = (anchor: string, open: boolean) => {
		// console.log(state)
		setDrawer(!drawer);
	};

	//Callback funktion om cart ska synas i footer
	return (
		<div>
			<CssBaseline />
			<AdminControlls />
			<MainView
				setRegisterValue={setRegisterValue}
			/>
			<Footer
				setRegisterOpen={setRegisterValue}
				isRegisterOpen={register}
				isOpen={drawer}
				toggleDrawer={toggleDrawer}
			/>

			<Cart
				setRegisterOpen={setRegisterValue}
				isOpen={drawer}
				toggleDrawer={toggleDrawer}
			/>
		</div>
	);
}

export default Layout;
