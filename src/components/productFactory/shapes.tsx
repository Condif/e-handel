import React from "react";
import { Link } from "react-router-dom";

import { Product } from "../../interfaces&types/interfaces";

import {
	Card,
	Typography,
	CardMedia,
	CardContent,
	CardActions,
	Collapse,
	IconButton,
	Container,
	Grid,
	Fab,
	Button,
	ButtonGroup,
	Box,
	Paper,
	ButtonBase,
	makeStyles,
	Theme,
	createStyles,
	Modal
} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import FavoriteIcon from "@material-ui/icons/Favorite";
import InfoIcon from "@material-ui/icons/Info";

function getModalStyle() {
	return {
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)"
	};
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		header: {
			position: "absolute",

			color: "#e7e7e7bb",
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
		img: {
			margin: "auto",
			display: "block",
			maxWidth: "100%",
			maxHeight: "100%"
		},
		addToCart: {
			padding: "20% 2rem"
		},
		addToCartButton: {
			width: "80%"
		},
		modalWrapper: {
			width:"100vw",
			height:"100vh",
			display: "flex",
			justifyContent: "center",
			alignItems: "center"
		},
		modalContent: {
			maxWidth:"80%",
			maxHeight:"90%",

			margin:"5rem",
			padding:"2rem"
		}
	})
);

interface Props {
	product: Product;
}

export function ProductCard(props: Props) {
	const classes = useStyles();

	// EXPAND
	const [expanded, setExpanded] = React.useState(false);
	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	// MODAL
	const [modalStyle] = React.useState(getModalStyle);
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
				<IconButton aria-label="addToCard">
					<InfoIcon onClick={handleExpandClick} />
				</IconButton>

				<button type="button" onClick={handleOpen}>
					quickview
				</button>

				<IconButton aria-label="addToCard" style={{ marginLeft: "auto" }}>
					<ShoppingCartIcon />
				</IconButton>
			</CardActions>
			<Modal
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
				open={open}
				onClose={handleClose}>
				<div className={classes.modalWrapper}>
					<Paper className={classes.modalContent}>
						<ProductPage product={props.product} />
					</Paper>
				</div>
			</Modal>
		</Card>
	);
}

export function ProductPage(props: Props) {
	const classes = useStyles();

	return (
		<Grid container spacing={4}>
			<Grid item xs={12} sm={6}>
				<img className={classes.img} alt="complex" src={props.product.img} />
			</Grid>

			<Grid item xs={12} sm={6}>
				<Grid container spacing={1}>
					<Grid item>
						<Typography variant="h3">{props.product.name}</Typography>
						<Typography variant="h5">{props.product.price}:-</Typography>
						<Typography variant="caption">
							incl. VAT, plus shipping cost
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant="h6">{props.product.desc}</Typography>
					</Grid>
					<Grid item>
						<Typography variant="h6">choose size :</Typography>
						<ButtonGroup
							size="medium"
							aria-label="medium outlined button group">
							{props.product.info?.sizes.map(size => (
								<Button
									key={size}
									variant="outlined"
									color="secondary"
									disableElevation>
									{size}
								</Button>
							))}
						</ButtonGroup>

						<Typography variant="h6">choose color :</Typography>
						{props.product.info?.colors.map(color => (
							<Fab
								key={color}
								size="small"
								aria-label={color}
								className={classes.margin}
								style={{ backgroundColor: color }}></Fab>
						))}
					</Grid>
				</Grid>
				<Grid item container className={classes.addToCart} justify="center">
					<Button
						size="large"
						variant="contained"
						color="primary"
						className={classes.addToCartButton}>
						add to cart <AddShoppingCartIcon />
					</Button>
				</Grid>
			</Grid>
		</Grid>
	);
}
