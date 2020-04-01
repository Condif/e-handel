import React from "react";
import { ProductContext } from "../productContext";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import CancelIcon from "@material-ui/icons/Cancel";

import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import {
	makeStyles,
	Theme,
	createStyles,
	Button,
	Modal,
	Paper,
	Typography,
	Grid
} from "@material-ui/core";
import AdminInput from "../../components/adminControlls/adminInput";
import { NewProduct } from "../../interfaces&types/interfaces";

interface Props {
	product?: any;
	shape: string;
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1
			// marginBottom: "4rem"
		},
		removeFromCart: {
			position: "absolute",
			width: "1.5rem",
			height: "1.5rem",
			top: "1rem",
			right: ".5rem",
			color: "#d3d3d3"
		},
		counterButtons: {
			color: "#d3d3d3"
		},
		clearCart: {
			position: "fixed",
			right: "1rem",
			height: "2rem",
			boxShadow: "none"
		},
		modalWrapper: {
			width: "100vw",
			height: "100vh",
			display: "flex",
			justifyContent: "center",
			alignItems: "center"
		},
		modalContent: {
			
			position: "relative",
			width: "50%",
			height: "60%",

			margin: "5rem",
			padding: "2rem"
		},
		closeBtn: {
			position: "absolute",
			top: 0,
			right: 0,

			margin: "1rem"
		}
	})
);

function ContextButton(props: Props) {
	const classes = useStyles();

	const inputs = ["name", "price", "desc", "img"];

	const [editItem, setEditItem] = React.useState({
		name: "",
		price: 0,
		desc: "",
		img: ""
	});

	// MODAL
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	switch (props.shape) {
		case "addToCart":
			return (
				<ProductContext.Consumer>
					{value => (
						<button onClick={() => value.addToCart(props.product)}>
							add to cart
						</button>
					)}
				</ProductContext.Consumer>
			);
		case "addToCounter":
			return (
				<ProductContext.Consumer>
					{value => (
						<AddCircleOutlineIcon
							className={classes.counterButtons}
							onClick={() => value.addToCounter(props.product)}
						/>
					)}
				</ProductContext.Consumer>
			);
		case "removeFromCounter":
			return (
				<ProductContext.Consumer>
					{value => (
						<RemoveCircleOutlineIcon
							className={classes.counterButtons}
							onClick={() => value.removeFromCounter(props.product)}
						/>
					)}
				</ProductContext.Consumer>
			);
		case "clearCart":
			return (
				<ProductContext.Consumer>
					{value => (
						<Button
							className={classes.clearCart}
							variant="contained"
							size="small"
							onClick={value.clearCart}>
							<DeleteIcon fontSize="small" />
							Cart
						</Button>
					)}
				</ProductContext.Consumer>
			);
		case "removeFromCart":
			return (
				<ProductContext.Consumer>
					{value => (
						<DeleteIcon
							className={classes.removeFromCart}
							onClick={() => value.removeFromCart(props.product)}
						/>
					)}
				</ProductContext.Consumer>
			);
		case "addNewItem":
			return (
				<ProductContext.Consumer>
					{value => (
						<button
							type="button"
							onClick={() => value.addNewItem(props.product)}>
							add new item
						</button>
					)}
				</ProductContext.Consumer>
			);

		case "deleteItem":
			return (
				<ProductContext.Consumer>
					{value => (
						<DeleteIcon onClick={() => value.deleteItem(props.product)} />
					)}
				</ProductContext.Consumer>
			);
		case "editItem":
			return (
				<ProductContext.Consumer>
					{value => (
						<>
							<EditIcon onClick={handleOpen} />

							<Modal
								aria-labelledby="simple-modal-title"
								aria-describedby="simple-modal-description"
								open={open}
								onClose={handleClose}>
								<div className={classes.modalWrapper}>
									<Paper className={classes.modalContent}>
										<CancelIcon
											className={classes.closeBtn}
											onClick={handleClose}
										/>
										<Typography variant="h4">edit item</Typography>
										<form
											className={classes.root}
											noValidate
											autoComplete="off">
											<Grid container spacing={2}>
												{inputs.map(input => (
													<AdminInput
														key={input}
														mode="edit"
														name={input}
														placeHolder={props.product}
														hook={editItem}
														setHook={setEditItem}
													/>
												))}

												<Grid item xs={12} onClick={handleClose}>
													<button
														type="button"
														onClick={() =>
															value.editItem(
																props.product,
																editItem as NewProduct
															)
														}>
														update item
													</button>
												</Grid>
											</Grid>
										</form>
									</Paper>
								</div>
							</Modal>
						</>
					)}
				</ProductContext.Consumer>
			);
		default:
			return null;
	}
}

export default ContextButton;
