import React from "react";
import MainView from "../mainView/mainView";
import { CssBaseline, Snackbar } from "@material-ui/core";
import Cart from "../cart/cart";
import Alert from "@material-ui/lab/Alert";
import Topbar from "../topbar/topbar";

function Layout() {
	const [register, setRegister] = React.useState(false);

	const setRegisterValue = (value: boolean) => {
		setRegister(value);
	};
	//State for alert
	const [open, setOpen] = React.useState(false);

	const handleClick = () => {
		setOpen(true);
	};

	const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
		if (reason === "clickaway") {
			return;
		}

		setOpen(false);
	};

	//State for module
	const [drawer, setDrawer] = React.useState(false);

	const toggleDrawer = (anchor: string, open: boolean) => {
		setDrawer(!drawer);
	};

	const vertical = "top";
	const horizontal = "center";

	return (
		<>
			<CssBaseline />

			<Topbar isOpen={drawer} toggleDrawer={toggleDrawer} />
			{/* <MainView /> */}

			<Snackbar
				style={{ marginTop: "3rem" }}
				anchorOrigin={{ vertical, horizontal }}
				open={open}
				autoHideDuration={1250}
				onClose={handleClose}>
				<Alert
					style={{ minWidth: "15rem" }}
					color="info"
					onClose={handleClose}
					severity="success">
					Added to the cart
				</Alert>
			</Snackbar>
			<MainView
				setRegisterValue={setRegisterValue}
				handleClose={handleClose}
				handleClick={handleClick}
			/>

			<Cart
				isOpen={drawer}
				toggleDrawer={toggleDrawer}
				setRegisterOpen={setRegisterValue}
			/>
		</>
	);
}

export default Layout;
