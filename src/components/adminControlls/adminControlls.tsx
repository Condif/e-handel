import React  from "react";

import SettingsIcon from "@material-ui/icons/Settings";
import AddIcon from "@material-ui/icons/Add";
import {
	makeStyles,
	Theme,
	createStyles,
	Modal,
	Paper,
	Typography,
	Grid,
	IconButton,
	Menu,
	MenuItem
} from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";

import ContextButton from "../../contexts/contextButton/contextButton";
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
			position: "relative",

			width: "50%",
			minWidth:"19rem",
			height: "60%",
			minHeight:"35rem",

			margin: "5rem",
			padding: "2rem"
		},
		closeBtn: {
			position: "absolute",
			top: 0,
			right: 0,

			margin: "1rem"
		},
		btnWrapper: {
			border: "1px solid red"
		},
		margin: {
			margin: theme.spacing(1)
		},
		withoutLabel: {
			marginTop: theme.spacing(3)
		}
	})
);

interface Props {
	auth: any;
}

function AdminControlls(props: Props) {
	const classes = useStyles();

	const inputs = ["name", "price", "desc", "img"];

	const [newItem, setNewItem] = React.useState({
		name: undefined,
		price: undefined,
		desc: undefined,
		img: undefined
	});
	const [filledForm, setFilledForm] = React.useState(false);

	// MODAL
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const openMenu = Boolean(anchorEl);

	const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	// - - - - - - -

	return (
		<>
			{props.auth && (
				<div>
					<IconButton
						aria-controls="admin"
						aria-haspopup="true"
						onClick={handleMenu}
						color="inherit">
						<SettingsIcon style={{ color: "#333" }} />
					</IconButton>
					<Menu
						id="menu-appbar"
						anchorEl={anchorEl}
						anchorOrigin={{
							vertical: "top",
							horizontal: "right"
						}}
						keepMounted
						transformOrigin={{
							vertical: "top",
							horizontal: "right"
						}}
						open={openMenu}
						onClose={handleMenuClose}
						onClick={handleMenuClose}>
						<MenuItem onClick={handleOpen}>
							<AddIcon />
							addItem
						</MenuItem>

						<MenuItem onClick={handleMenuClose}>close</MenuItem>
					</Menu>
				</div>
			)}

			<Modal
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
				open={open}
				onClose={handleClose}>
				<div className={classes.modalWrapper}>
					<Paper className={classes.modalContent}>
						<Typography variant="h4">add new item</Typography>
						<CancelIcon className={classes.closeBtn} onClick={handleClose} />
						<form className={classes.root} noValidate autoComplete="off">
							<Grid container spacing={2}>
								{inputs.map(input => (
									<AdminInput
										key={input}
										mode="add"
										name={input}
										hook={newItem}
										setHook={setNewItem}
										formHook={setFilledForm}
									/>
								))}

								<Grid item xs={12} onClick={handleClose}>
									{filledForm ? (
										<ContextButton shape="addNewItem" product={newItem} />
									) : (
										<button type="button" disabled>
											add new item
										</button>
									)}
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
