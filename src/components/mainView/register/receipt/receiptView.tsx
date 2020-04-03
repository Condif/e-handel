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
import { Receipt } from "../../../../interfaces&types/interfaces";

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

interface Props {
	receipt: Receipt;
}

const ReceiptView = (props: Props) => {
	const classes = useStyles();

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
									{props.receipt.firstName + " " + props.receipt.lastName}
								</Typography>
								<Typography variant="subtitle2">
									{props.receipt.address}
								</Typography>
								<Typography variant="subtitle2">
									{props.receipt.postal}
								</Typography>
								<Typography variant="subtitle2">
									{props.receipt.city}
								</Typography>
							</Grid>
							<Grid item>
								<Typography
									variant="subtitle1"
									style={{ fontWeight: "bolder" }}>
									delivery info
								</Typography>
								<Typography variant="subtitle2">
									{props.receipt.delivery.name}
								</Typography>
								<Typography variant="subtitle2">
									{props.receipt.delivery.deliveryTime}
								</Typography>
								<Typography variant="subtitle2">
									{props.receipt.delivery.price}:-
								</Typography>
							</Grid>
							<Grid item>
								<Typography
									variant="subtitle1"
									style={{ fontWeight: "bolder" }}>
									payment info
								</Typography>
								<Typography variant="subtitle2">
									{props.receipt.payment.name}
								</Typography>
								{props.receipt.payment.name === "card" ? (
									<>
										<Typography variant="subtitle2">
											{props.receipt.altFirstName != props.receipt.firstName
												? props.receipt.altFirstName + " "
												: props.receipt.firstName + " "}
											{props.receipt.altLastName != props.receipt.lastName
												? props.receipt.altLastName
												: props.receipt.lastName}
										</Typography>
										<Typography variant="subtitle1">
											{props.receipt.cardNumber}
										</Typography>
									</>
								) : null}
								{props.receipt.payment.name === "klarna" ? (
									<Typography variant="subtitle2">
										{props.receipt.payment.options.label}
									</Typography>
								) : null}
							</Grid>
						</Grid>
						<Grid container spacing={2} xs={12}>
							<Typography variant="body1" style={{ marginTop: "2rem" }}>
								item list
							</Typography>
							<div className={classes.list} role="presentation">
								{props.receipt.cart.map(item => (
									<ProductFactory
										key={item.product.serial}
										product={item.product}
										amount={item.amount}
										productShape="receipt"
									/>
								))}
							</div>
						</Grid>
						<Grid
							container
							spacing={2}
							xs={12}
							sm={5}
							style={{ marginLeft: "auto", padding: "1rem" }}>
							<Grid item container justify="space-between">
								<Typography>subtotal:</Typography>
								<Typography>{props.receipt.cost.subtotal}:-</Typography>
							</Grid>
							<Grid item container justify="space-between">
								<Typography>VAT(25%): </Typography>
								<Typography>{props.receipt.cost.vat}:-</Typography>
							</Grid>
							<Grid item container justify="space-between">
								<Typography>TOTAL: </Typography>
								<Typography>
									{props.receipt.cost.subtotal + props.receipt.cost.vat}:-
								</Typography>
							</Grid>
						</Grid>
					</Grid>
				</Paper>
			</Grid>
		</Container>
	);
};

export default ReceiptView;
