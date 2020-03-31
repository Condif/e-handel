import React, { CSSProperties } from "react";
import clsx from "clsx";

import { ProductContext } from "../../contexts/productContext";
import {
	makeStyles,
	Theme,
	createStyles,
	Modal,
	Paper,
	Typography,
	Grid,
	TextField,
	FormControl,
	FilledInput,
	InputAdornment,
	FormHelperText,
	OutlinedInput,
	Input
} from "@material-ui/core";

import ContextButton from "../contextButton/contextButton";
import AdminInput from "./adminInput";

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
		},
		margin: {
			margin: theme.spacing(1)
		},
		withoutLabel: {
			marginTop: theme.spacing(3)
		}
	})
);

function AdminControlls() {
	const classes = useStyles();

	const inputs = ["name", "price", "desc", "img"];

	const [newItem, setNewItem] = React.useState({
		name: undefined,
		price: undefined,
		desc: undefined,
		img: undefined
	});

	// MODAL
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	// - - - - - - -

	return (
		<>
			<div style={btnWrapper}>
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
							<Grid container spacing={2}>
								{inputs.map(input => (
									<AdminInput
										key={input}
										name={input}
										hook={newItem}
										setHook={setNewItem}
									/>
								))}

								<Grid item xs={12} onClick={handleClose}>
									<ContextButton shape="addNewItem" product={newItem} />
								</Grid>
							</Grid>
						</form>
					</Paper>
				</div>
			</Modal>
		</>
	);
}

export default AdminControlls;

const btnWrapper: CSSProperties = {
	position: "absolute",
	top: 10,
	left: "50%",
	transform: "translatex(-50%)"
};
