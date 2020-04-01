import React from "react";
import MainView from "../mainView/mainView";
import Footer from "../footer/footer";
import AdminControlls from "../adminControlls/adminControlls";
import { CssBaseline, Snackbar } from "@material-ui/core";
import Cart from "../cart/cart";
import Alert from "@material-ui/lab/Alert";
import { ProductContext } from "../../contexts/productContext";

function Layout() {
	const [open, setOpen] = React.useState(false);

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

	const vertical = 'top'
	const horizontal = 'center'
	//Callback funktion om cart ska synas i footer
	return (
		<div>
			<Snackbar style={{marginTop: '3rem'}} anchorOrigin={{ vertical, horizontal }} open={open} autoHideDuration={1250} onClose={handleClose}>
				<Alert style={{minWidth: '15rem'}} color="info" onClose={handleClose} severity="success">
					Added to the cart
        		</Alert>
			</Snackbar>
			<CssBaseline />
			<AdminControlls />
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
