import React from "react";
import {
	Grid,
	Container,
	Typography,
	makeStyles,
	Paper
} from "@material-ui/core";
import ProductFactory from "../../../productFactory/productFactory";
import { Receipt } from "../../../../interfaces&types/interfaces";
import GetDeliveryDate from "../deliveryOptions/deliveryAPI";
import { Redirect } from "react-router";

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
	receipt: Receipt | null;
}

const ReceiptView = (props: Props) => {
	const classes = useStyles();

	const date = new Date();

	const day = date.getDate() < 9 ? "0" + date.getDate() : date.getDate();
	const month = date.getDay() < 9 ? "0" + date.getDay() : date.getDay();
	const year = date.getFullYear();

	return (
		<Container maxWidth="md" className={classes.container}>
			{props.receipt ? 
			
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
									billed to
								</Typography>
								<Typography variant="subtitle2">
									{props.receipt.firstName + " " + props.receipt.lastName}
								</Typography>
								<Typography variant="subtitle2">
									{props.receipt.mobileNumber}
								</Typography>
								<Typography variant="subtitle2">
									{props.receipt.address}
								</Typography>
								<Typography variant="subtitle2">
									{props.receipt.postal + " " + props.receipt.city}
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

								{/*- - - - CARD - - - -*/}
								{props.receipt.payment.name === "card" ? (
									<>
										<Typography variant="subtitle2">
											{props.receipt.firstName + " " + props.receipt.lastName}
										</Typography>

										<Typography variant="subtitle2">
											XXXX-XXXX-XXXX-{props.receipt.cardNumber.slice(-4)}
										</Typography>
									</>
								) : null}

								{/*- - - - KLARNA - - - -*/}
								{props.receipt.payment.name === "klarna" &&
								props.receipt.payment.options ? (
									<Typography variant="subtitle2">
										{props.receipt.payment.options}
									</Typography>
								) : null}

								{/*- - - - SWISH - - - -*/}
								{props.receipt.payment.name === "swish" ? (
									<Typography variant="subtitle2">
										{props.receipt.altMobileNumber != props.receipt.mobileNumber
											? props.receipt.altMobileNumber
											: props.receipt.mobileNumber}
									</Typography>
								) : null}
							</Grid>
							<Grid item>
								<Typography
									variant="subtitle1"
									style={{ fontWeight: "bolder" }}>
									delivery info
								</Typography>

								{props.receipt.alternate ? (
									<Typography variant="subtitle2">
										{props.receipt.altFirstName +
											" " +
											props.receipt.altLastName}
									</Typography>
								) : (
									<Typography variant="subtitle2">
										{props.receipt.firstName + " " + props.receipt.lastName}
									</Typography>
								)}

								<Typography variant="subtitle2">
									{props.receipt.delivery.name}
								</Typography>
								<Typography variant="subtitle2">
									{'On: ' + GetDeliveryDate(props.receipt.delivery.deliveryTime).slice(-10)}
								</Typography>
								<Typography variant="subtitle2">
									{props.receipt.delivery.price}:-
								</Typography>
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
								<Typography>{props.receipt.cost * 0.8}:-</Typography>
							</Grid>
							<Grid item container justify="space-between">
								<Typography>VAT(25%): </Typography>
								<Typography>{props.receipt.cost * 0.2}:-</Typography>
							</Grid>
							<Grid item container justify="space-between">
								<Typography>TOTAL: </Typography>
								<Typography>
									{props.receipt.cost}:-
								</Typography>
							</Grid>
						</Grid>
					</Grid>
				</Paper>
			</Grid>
			: <Redirect to="/" />
			}
		</Container>
	);
};

export default ReceiptView;
