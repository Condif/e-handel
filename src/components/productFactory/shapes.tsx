import React, { CSSProperties } from "react";
import { Link } from "react-router-dom";

import { Product } from "../../interfaces&types/interfaces";
import ContextButton from "../../contexts/contextButton/contextButton";

import {
	Card,
	Typography,
	CardMedia,
	CardContent,
	CardActions,
	Collapse,
	IconButton,
	Grid,
	Box,
	Paper,
	makeStyles,
	Theme,
	createStyles,
	Modal,
	Divider
} from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
import CancelIcon from "@material-ui/icons/Cancel";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { AdminContext } from "../../contexts/admin";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			position: "relative",
			margin: "1rem 0",
			"& .MuiGrid-container": {
				padding: theme.spacing(1, 1)
			},
			"& .MuiCardContent-root": {
				padding: theme.spacing(1, 1)
			}
		},
		header: {
			position: "absolute",
			width: "100%",
			color: "#0f0f0f",
			backgroundColor: "#e7e7e74D",
			letterSpacing: ".2rem"
		},
		media: {
			height: 0,
			paddingTop: "100%" // 16:9
		},
		paper: {
			position: "absolute",
			width: 400,
			backgroundColor: theme.palette.background.paper,
			border: "2px solid #000",
			boxShadow: theme.shadows[5],
			padding: theme.spacing(2, 4, 3)
		},
		expandedContent: {
			position: "absolute",
			bottom: "4rem",

			margin: "1rem",
			height: "40%",

			background: "#e7e7e788",
			borderTopLeftRadius: ".5rem"
		},
		margin: {
			margin: theme.spacing(1)
		},
		imgWrapper: {
			background: "green",

			height: "100%",
			width: "100%"
		},
		img: {
			height: "100%",
			width: "100%"

			// objectFit: "fill"
		},
		imgCart: {
			height: "5rem",
			width: "3.5rem",
			objectFit: "cover"
		},
		addToCart: {
			margin: "3rem auto"
		},
		addToCartButton: {
			width: "80%"
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

			width: "65%",
			minWidth: "19rem",
			height: "80%",
			minHeight: "35rem",

			margin: "5rem",
			padding: "2rem",

			overflow: "auto"
		},
		closeBtn: {
			position: "absolute",
			top: 0,
			right: 0,

			margin: "1rem"
		},
		cartCardWrapper: {
			height: "7rem"
		},
		amountWrapper: {
			display: "flex",
			position: "relative"
		},
		totalAmount: {
			position: "absolute",
			left: "6rem"
		},
		secondary: {
			fontSize: ".8rem",
			color: "#404040"
		},
		alert: {
			width: "2rem"
		}
	})
);

interface Props {
	product: Product;
	amount?: number;
	handleClick?: () => void;
	twoOnclickAlert?: () => void;
}

export function ProductCard(props: Props) {
	const classes = useStyles();

	// EXPAND
	const [expanded, setExpanded] = React.useState(false);
	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	// MODAL
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Card raised={true} style={{ position: "relative" }}>
			<CardContent className={classes.header}>
				<Typography variant="h4">{props.product.name}</Typography>
				<Typography variant="h6">{props.product.price}:-</Typography>
			</CardContent>
			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<CardContent
					className={classes.expandedContent}
					onClick={handleExpandClick}>
					<Typography paragraph>- {props.product.desc}</Typography>
				</CardContent>
			</Collapse>

			<Link to={"/productview/" + props.product.serial}>
				<CardMedia className={classes.media} image={props.product.img} />
			</Link>

			<CardActions disableSpacing>
				<IconButton aria-label="addToCard" onClick={handleExpandClick}>
					<InfoIcon />
				</IconButton>

				<IconButton aria-label="addToCard" onClick={handleOpen}>
					<VisibilityIcon />
				</IconButton>

				<div style={{ marginLeft: "auto" }}>
					<ContextButton
						product={props.product}
						handleClick={props.handleClick}
						shape="addToCart"
					/>
				</div>

				<AdminContext.Consumer>
					{value =>
						value.admin ? (
							<>
								<div style={{ position: "absolute", top: 5, right: 5 }}>
									<ContextButton product={props.product} shape="deleteItem" />
								</div>
								<div style={{ position: "absolute", top: 30, right: 5 }}>
									<ContextButton product={props.product} shape="editItem" />
								</div>
							</>
						) : null
					}
				</AdminContext.Consumer>
			</CardActions>

			<Modal
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
				open={open}
				onClose={handleClose}>
				<div className={classes.modalWrapper}>
					<Paper className={classes.modalContent}>
						<CancelIcon className={classes.closeBtn} onClick={handleClose} />
						<ProductPage
							handleClick={props.handleClick}
							product={props.product}
						/>
					</Paper>
				</div>
			</Modal>
		</Card>
	);
}

export function ProductPage(props: Props) {
	const classes = useStyles();

	return (
		<Grid container spacing={4} style={{ height: "100%" }}>
			<Grid item xs={12} sm={6} style={{ height: "100%" }}>
				<div style={imgWrapper(props.product.img)}></div>
			</Grid>

			<Grid item xs={12} sm={6} direction="column">
				<Grid container spacing={1}>
					<Grid item>
						<Typography variant="h3">{props.product.name}</Typography>
						<Typography variant="h5">{props.product.price}:-</Typography>
						<Typography variant="caption">
							incl. VAT, plus shipping cost
						</Typography>

						<Divider style={{ margin: "1rem" }} />

						<Typography variant="h6">{props.product.desc}</Typography>
					</Grid>
				</Grid>
				<Grid item container className={classes.addToCart} justify="center">
					<ContextButton
						product={props.product}
						handleClick={props.handleClick}
						twoOnclickAlert={props.twoOnclickAlert}
						shape="productSiteAddToCart"></ContextButton>
				</Grid>
			</Grid>
		</Grid>
	);
}

export function ProductCart(props: Props) {
	const classes = useStyles();

	return (
		<Box className={classes.root} bgcolor="background.paper">
			<Card className={classes.cartCardWrapper}>
				<Grid container spacing={1}>
					<Grid item xs={3}>
						<CardContent>
							<img
								className={classes.imgCart}
								alt="complex"
								src={props.product.img}
							/>
						</CardContent>
					</Grid>
					<Grid item xs={9}>
						<CardContent>
							<Typography variant="subtitle1">{props.product.name}</Typography>
							<Typography className={classes.secondary} variant="subtitle1">
								{"Price: " + props.product.price}:-
							</Typography>
							<div className={classes.amountWrapper}>
								<Box display="flex">
									<ContextButton
										product={props.product}
										shape="removeFromCounter"
									/>
									<Box display="flex" margin="0 0.4rem 0 0.4rem">
										<Typography variant="subtitle1">{props.amount}</Typography>
									</Box>
									<ContextButton product={props.product} shape="addToCounter" />
								</Box>
								<Typography className={classes.totalAmount} variant="subtitle1">
									{props.amount
										? `Total: ${props.product.price * props.amount}:-`
										: null}
								</Typography>
							</div>
						</CardContent>
					</Grid>
					<CardContent>
						<ContextButton product={props.product} shape="removeFromCart" />
					</CardContent>
				</Grid>
			</Card>
		</Box>
	);
}

export function ProductReceipt(props: Props) {
	const classes = useStyles();

	return (
		<Card
			style={{ position: "relative", marginBottom: "1rem", display: "flex" }}>
			<Box component="div" style={{ margin: ".5rem .5rem .3rem .5rem" }}>
				<img
					className={classes.imgCart}
					alt="complex"
					src={props.product.img}
				/>
			</Box>
			<Box
				component="div"
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center"
				}}>
				<Typography variant="subtitle1">{props.product.name}</Typography>
				<Typography className={classes.secondary} variant="subtitle1">
					{`Amount: ${props.amount}`}
				</Typography>
				<Typography className={classes.secondary} variant="subtitle1">
					{`per unit: ${props.product.price}:-`}
				</Typography>
				<Box display={{ xs: "block", sm: "none" }}>
					<Typography variant="subtitle1">
						{props.amount
							? `Total: ${props.product.price * props.amount}:-`
							: null}
					</Typography>
				</Box>
			</Box>
			<Box
				component="div"
				display={{ xs: "none", sm: "block" }}
				style={{
					position: "absolute",
					right: "1rem",
					top: "50%",
					transform: "translateY(-50%)"
				}}>
				<Typography variant="subtitle1">
					{props.amount
						? `Total: ${props.product.price * props.amount}:-`
						: null}
				</Typography>
			</Box>
		</Card>
	);
}
export function ProductCheckout(props: Props) {
	const classes = useStyles();

	return (
		<Card
			style={{ position: "relative", marginBottom: "1rem", display: "flex" }}>
			<Box component="div" style={{ margin: ".5rem .5rem .3rem .5rem" }}>
				<img
					className={classes.imgCart}
					alt="complex"
					src={props.product.img}
				/>
			</Box>
			<Box
				component="div"
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center"
				}}>
				<Typography variant="subtitle1">{props.product.name}</Typography>
				<Typography className={classes.secondary} variant="subtitle1">
					{`Amount: ${props.amount}`}
				</Typography>
				<Box display={{ xs: "block", sm: "none" }}>
					<Typography variant="subtitle1">
						{props.amount
							? `Total: ${props.product.price * props.amount}:-`
							: null}
					</Typography>
				</Box>
			</Box>
			<Box
				component="div"
				display={{ xs: "none", sm: "block" }}
				style={{
					position: "absolute",
					right: "1rem",
					top: "50%",
					transform: "translateY(-50%)"
				}}>
				<Typography variant="subtitle1">
					{props.amount
						? `Total: ${props.product.price * props.amount}:-`
						: null}
				</Typography>
			</Box>
		</Card>
	);
}

const imgWrapper: (imageSrc: string) => CSSProperties = imageSrc => ({
	background: `url(${imageSrc})`,
	backgroundSize: "cover",
	backgroundPosition: "center",
	backgroundRepeat: "no-repeat",

	height: "100%",
	width: "100%"
});
