import React from "react";
import {
	createStyles,
	makeStyles,
	Grid,
	Typography,
	Button,
	Divider
} from "@material-ui/core";
import { DeliveryOption, baseDelivery } from "./deliveryOptions/deliveryAPI";
import { PaymentOption, basePayment } from "./paymentOptions/paymentAPI";

interface Props {
	itemTotal: { totalValue: number; itemAmount: number };
	delivery: DeliveryOption;
	payment: PaymentOption;
}

const useStyles = makeStyles(() =>
	createStyles({
		totalWrapper: {
			width: "100%",
			display: "flex",
			flexDirection: "column",
			alignItems: "center"
		}
	})
);

export default function CheckoutTotal(props: Props) {
	const classes = useStyles();

	return (
		<>
			<Grid container xs={12}>
				<Grid item xs={12}>
					<Typography variant="body2" align="center">
						{props.payment != basePayment
							? `Payment option: ${props.payment.name}`
							: `No payment option chosen`}
					</Typography>
					<Typography variant="body2" align="center">
						{props.delivery != baseDelivery
							? `Shipping: +${props.delivery.price}:-`
							: `No delivery option chosen`}
					</Typography>
					<Divider style={{ margin: "1rem 0" }} />
				</Grid>
				<Grid item xs={6}>
					<Typography variant="body1">
						{`${props.itemTotal.itemAmount} Items:`}
					</Typography>
					<Typography variant="body1">
						{`excl. VAT: ${(props.itemTotal.totalValue * 0.8).toFixed(2)}:-`}
					</Typography>
					<Typography variant="body1">
						{`VAT: +${(props.itemTotal.totalValue * 0.2).toFixed(2)}:-`}
					</Typography>
					{/* <Typography variant="body1">
						{props.delivery != baseDelivery
							? `Shipping: +${props.delivery.price}:-`
							: `No delivery option chosen`}
					</Typography> */}
				</Grid>
				<Grid
					item
					container
					xs={6}
					direction="row"
					alignItems="center"
					justify="center"
					style={{ borderLeft: "1px solid #0002" }}>
					<Typography variant="h6" align="center">
						{`Total: ${
							typeof props.delivery.price === "number"
								? (props.itemTotal.totalValue + props.delivery.price).toFixed(2)
								: null
						}`}
					</Typography>
				</Grid>
				<Grid
					item
					container
					xs={12}
					direction="column"
					alignItems="center"
					justify="center">
					<Button
						disabled={
							props.delivery != baseDelivery && props.payment != basePayment
								? false
								: true
						}
						variant="contained"
						color="primary"
						style={{ padding: ".5rem 2rem", margin: "3rem" }}>
						confirm
					</Button>
				</Grid>
			</Grid>
		</>
	);
}
