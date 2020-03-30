import React, { useEffect } from "react";

import {
	Grid,
	makeStyles,
	Theme,
	createStyles,
	Container,
	Typography,
	Modal,
	Paper,
	TextField,
	FormControl,
	InputLabel,
	Input,
	FormHelperText
} from "@material-ui/core";
import CardFactory from "../../productFactory/productFactory";
import { ProductContext } from "../../../contexts/productContext";
import { ProductList } from "../../productsAPI/productsAPI";
import { CSSProperties } from "@material-ui/core/styles/withStyles";
import { Product } from "../../../interfaces&types/interfaces";
import { open } from "fs";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
			marginBottom: "4rem"
		},
		header: {
			margin: "1rem 0",
			borderBottom: "2px solid #97ADA188",
			color: "#4B6155"
		},
		modalWrapper: {
			width: "100vw",
			height: "100vh",
			display: "flex",
			justifyContent: "center",
			alignItems: "center"
		},
		modalContent: {
			width: "50%",
			height: "60%",

			margin: "5rem",
			padding: "2rem"
		}
	})
);

function useForceUpdate() {
	const [value, setValue] = React.useState(0); // integer state
	return () => setValue(value => ++value); // update the state to force render
}

interface Props {
}

function ProductGrid(props: Props) {
	const classes = useStyles();

	// MODAL
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<ProductContext.Consumer>
			{({ products, removeLastItem, addNewItem }) => (
				<Container maxWidth="lg" disableGutters={false}>
					<Typography variant="h2" className={classes.header}>
						Products
					</Typography>

					<div style={btnWrapper}>
						<button onClick={removeLastItem}>-</button>
						<button onClick={handleOpen}>+</button>
					</div>

					<Modal
						aria-labelledby="simple-modal-title"
						aria-describedby="simple-modal-description"
						open={open}
						onClose={handleClose}>
						<div className={classes.modalWrapper}>
							<Paper className={classes.modalContent}>
								<Typography variant="h4">add new item</Typography>
								<form className={classes.root} noValidate autoComplete="off">
									<div>
										<TextField
											id="name"
											label="name"
											placeholder="add name"
											helperText="name of the new product"
										/>
										<TextField
											id="price"
											label="price"
											placeholder="add price"
											helperText="price of the new product"
										/>
									</div>
								</form>
							</Paper>
						</div>
					</Modal>

					<Grid
						container
						direction="column"
						justify="flex-start"
						alignItems="stretch"
						style={{ marginBottom: "5rem" }}>
						<Grid container justify="center" spacing={2}>
							{products.map((product: any) => (
								<Grid key={product.serial} item xs={12} sm={6} md={4}>
									<CardFactory product={product} productShape="card" />
								</Grid>
							))}
						</Grid>
					</Grid>
				</Container>
			)}
		</ProductContext.Consumer>
	);
}

export default ProductGrid;

const btnWrapper: CSSProperties = {
	position: "absolute",
	top: 10,
	left: "50%",
	transform: "translatex(-50%)"
};

