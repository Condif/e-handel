import React from "react";
import MainView from "../mainView/mainView";
import Footer from "../footer/footer";
// npm
import { CssBaseline, Snackbar } from "@material-ui/core";
import Cart from "../cart/cart";
import Alert from "@material-ui/lab/Alert";

function Layout() {
	const [open, setOpen] = React.useState(true);

	const handleClick = () => {
		setOpen(true);
	};

	const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpen(false);
	};

	const [drawer, setDrawer] = React.useState(false)


	const toggleDrawer = (anchor: string, open: boolean) => {
		// console.log(state)
		setDrawer(!drawer);
	};
	//Callback funktion om cart ska synas i footer
	return (
		<div>
			<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
				<Alert onClose={handleClose} severity="success">
					This is a success message!
        		</Alert>
			</Snackbar>
			<CssBaseline />
			<MainView 
				handleClick={handleClick}
			/>
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
