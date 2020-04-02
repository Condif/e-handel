import React from "react";
import {
	Grid,
	Box,
	Container,
	Typography,
	makeStyles,
	Divider,
	Paper
} from "@material-ui/core";
import ProductFactory from "../../../productFactory/productFactory";

const useStyles = makeStyles(theme => ({
	container: {
		display: "flex",
		justifyContent: "center",

		padding: "1rem",
		background: "#34bb78"
	},
	paper: {
		width: "100%",
		padding: "1rem"
	},
	list: {
		width: "100%",
		height: "100%"
	}
}));

const ReceiptView = () => {
	const classes = useStyles();

	const template = {
		firstName: "filip",
		altFirstName: "christian",
		lastName: "sunnemar",
		altLastName: "ahgren",
		mobileNumber: "0303-52559",
		altMobileNumber: "031-666420",
		address: "Dennadär Gatan 42",
		postal: "445 90",
		city: "Borås",
		cardNumber: "1111-1111-1111-1337",
		CVC: "112",
		expiry: "04-24",

		delivery: {
			type: "del",
			name: "Home delivery",
			desc: "Deliver to your front door",
			deliveryTime: "2-3 work days",
			price: 199
		},

		payment: {
			type: "pay",
			name: "card",
			desc: "Pay by invoice after purchase",
			price: "fee",
			options: {
				value: "KLA14",
				label: "14 day invoice"
			}
		},

		cart: [
			{
				product: {
					name: "Small cactus",
					serial: 2,
					img:
						"https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEzMDA0fQ&auto=format&fit=crop&w=709&q=80",
					price: 49,
					desc:
						"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure ea veritatis hic, vero fugit..."
				},
				amount: 2
			},
			{
				product: {
					name: "Hanging plant",
					serial: 1,
					img:
						"https://images.unsplash.com/photo-1485902409384-e367af5b5c92?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
					price: 299,
					desc:
						"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure ea veritatis hic, vero fugit..."
				},
				amount: 1
			}
		]
	};

	const date = new Date();

	const day = date.getDate() < 9 ? "0" + date.getDate() : date.getDate();
	const month = date.getDay() < 9 ? "0" + date.getDay() : date.getDay();
	const year = date.getFullYear();

	return (
		<Container maxWidth="md" className={classes.container}>
			<Grid container xs={12}>
				<Grid item>
					<Typography variant="h3">Reciept</Typography>
				</Grid>
				<Paper className={classes.paper}>
					<Grid container spacing={0} alignItems="center" justify="center">
						<Grid
							container
							spacing={2}
							xs={12}
							md={6}
							justify="space-evenly"
							style={{ background: "#0001" }}>
							<Grid item>
								<Typography
									variant="subtitle1"
									style={{ fontWeight: "bolder" }}>
									invoice nr
								</Typography>
								<Typography variant="subtitle1">
									{Math.floor(Math.random() * 100000)}
								</Typography>
							</Grid>
							<Grid item>
								<Typography
									variant="subtitle1"
									style={{ fontWeight: "bolder" }}>
									date of issue
								</Typography>
								<Typography variant="subtitle1">
									{day}-{month}-{year}
								</Typography>
							</Grid>
						</Grid>

						<Grid
							container
							spacing={2}
							xs={12}
							justify="space-between"
							style={{ marginTop: "1rem" }}>
							<Grid item>
								<Typography
									variant="subtitle1"
									style={{ fontWeight: "bolder" }}>
									billed to:
								</Typography>
								<Typography variant="subtitle2">
									{template.firstName + " " + template.lastName}
								</Typography>
								<Typography variant="subtitle2">{template.address}</Typography>
								<Typography variant="subtitle2">{template.postal}</Typography>
								<Typography variant="subtitle2">{template.city}</Typography>
							</Grid>
							<Grid item>
								<Typography
									variant="subtitle1"
									style={{ fontWeight: "bolder" }}>
									delivery info
								</Typography>
								<Typography variant="subtitle2">
									{template.delivery.name}
								</Typography>
								<Typography variant="subtitle2">
									{template.delivery.deliveryTime}
								</Typography>
								<Typography variant="subtitle2">
									{template.delivery.price}:-
								</Typography>
							</Grid>
							<Grid item>
								<Typography
									variant="subtitle1"
									style={{ fontWeight: "bolder" }}>
									payment info
								</Typography>
								<Typography variant="subtitle2">
									{template.payment.name}
								</Typography>
								{template.payment.name === "card" ? (
									<>
										<Typography variant="subtitle2">
											{template.altFirstName != template.firstName
												? (template.altFirstName + " ")
												: (template.firstName + " ")} 
											{template.altLastName != template.lastName
												? template.altLastName
												: template.lastName}
										</Typography>
										<Typography variant="subtitle1">
											{template.cardNumber}
										</Typography>
									</>
								) : null}
								{template.payment.name === "klarna" ? (
									<Typography variant="subtitle2">
										{template.payment.options.label}
									</Typography>
								) : null}
							</Grid>
						</Grid>
						<Grid container spacing={2} xs={12}>
							<Typography variant="body1" style={{ marginTop: "2rem" }}>
								item list
							</Typography>
							<div className={classes.list} role="presentation">
								{template.cart.map(item => (
									<ProductFactory
										key={item.product.serial}
										product={item.product}
										amount={item.amount}
										productShape="receipt"
									/>
								))}
							</div>
						</Grid>
						<Grid container spacing={2} xs={12}>
							<Grid item>
								<Typography>subtotal:</Typography>
								<Typography>VAT(25%): </Typography>
								<Typography>TOTAL: </Typography>
							</Grid>
						</Grid>
					</Grid>
				</Paper>
			</Grid>
		</Container>
	);
};

export default ReceiptView;
