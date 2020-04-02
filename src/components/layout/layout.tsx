import React from "react";
import MainView from "../mainView/mainView";
import Footer from "../footer/footer";
import AdminControlls from "../adminControlls/adminControlls";
import { CssBaseline, Snackbar } from "@material-ui/core";
import Cart from "../cart/cart";
import Alert from "@material-ui/lab/Alert";
import { ProductContext } from "../../contexts/productContext";

function Layout() {

	//State for alert
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

	//State for module
	const [drawer, setDrawer] = React.useState(false)


	const toggleDrawer = (anchor: string, open: boolean) => {
		setDrawer(!drawer);
	};

	const vertical = 'top'
	const horizontal = 'center'

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
				handleClose={handleClose}
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
