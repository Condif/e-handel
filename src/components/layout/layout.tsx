import React from "react";
import MainView from "../mainView/mainView";
import Footer from "../footer/footer";
import AdminControlls from "../adminControlls/adminControlls";
import { CssBaseline, Snackbar } from "@material-ui/core";
import Cart from "../cart/cart";
import Alert from "@material-ui/lab/Alert";
import { ProductContext } from "../../contexts/productContext";
import { AdminContext } from "../../contexts/admin";

function Layout() {

	const [drawer, setDrawer] = React.useState(false)
	const [register, setRegister] = React.useState(false)

	const setRegisterValue = (value: boolean) => {
		setRegister(value)	
	}
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
					<Snackbar style={{marginTop: '3rem'}} anchorOrigin={{ vertical, horizontal }} open={open} autoHideDuration={1250} onClose={handleClose}>
						<Alert style={{minWidth: '15rem'}} color="info" onClose={handleClose} severity="success">
							Added to the cart
	        			</Alert>
					</Snackbar>
					<MainView 
						setRegisterValue={setRegisterValue}
						handleClose={handleClose}
						handleClick={handleClick}
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
