import React from "react";
import MainView from "../mainView/mainView";
import Footer from "../footer/footer";
import AdminControlls from "../adminControlls/adminControlls";
import { CssBaseline } from "@material-ui/core";
import Cart from "../cart/cart";
import { AdminContext } from "../../contexts/admin";

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
		<AdminContext.Consumer>
			{value => (
				<>
					<CssBaseline />

					{value.admin ? <AdminControlls /> : null}

					<button
						style={{
							position: "absolute",
							top: 0,
							right: 0,
							padding: ".2rem",
							margin: ".2rem"
						}}
						onClick={value.toggleAdmin}>
						admin mode
						<br />
						{value.admin ? "on" : "off"}
					</button>

					<MainView 
					setRegisterValue={setRegisterValue}
					/>
					<Footer 
					isOpen={drawer} 
					toggleDrawer={toggleDrawer} 
					setRegisterOpen={setRegisterValue}
					isRegisterOpen={register}
					/>

					<Cart 
					isOpen={drawer} 
					toggleDrawer={toggleDrawer} 
					setRegisterOpen={setRegisterValue}
					/>
				</>
			)}
		</AdminContext.Consumer>
	);
}

export default Layout;
