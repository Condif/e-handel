import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
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
	ButtonBase
} from "@material-ui/core";
import { spacing } from '@material-ui/system';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteIcon from "@material-ui/icons/Favorite";
import InfoIcon from "@material-ui/icons/Info";
import AddIcon from "@material-ui/icons/Add";

import { Product } from "../../interfaces&types/interfaces";
import { View } from "../../interfaces&types/types";

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
		imgCart: {
			maxWidth:"100%",
			maxHeight: "100%",
			margin: "auto",
			width: "8rem",
			display: "block"
		},
		img: {
			margin: "auto",
			display: "block",
			maxWidth: "100%",
			maxHeight: "100%",
		}
	})
);

interface Props {
	product: Product;
	view: View;
}

export default function CardFactory(props: Props) {
	const classes = useStyles();
	const [expanded, setExpanded] = React.useState(false);
	let cartList: Product;

	const addToCart = () => {
		cartList = props.product
	}

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	const handleonClick = () => {
		handleExpandClick();
		addToCart();
	}

	switch (props.view) {
		case "card":
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
						<IconButton aria-label="add to favorites">
							<FavoriteIcon />
						</IconButton>

						<IconButton aria-label="addToCard">
							<ShoppingCartIcon />
						</IconButton>

						<IconButton aria-label="addToCard">
							<InfoIcon onClick={handleonClick}/>
						</IconButton>
					</CardActions>
				</Card>
			);
		case "cart":
			return (
				<Box
					display="flex"
					flexDirection="column"
					p={1}
					m={0}
					bgcolor="background.paper"
				>
					<Card style={{display: 'flex', margin: '1rem 0 1rem 0'}} >
						<CardContent>
							<img
								className={classes.imgCart}
								alt="complex"
								src={props.product.img}
							/>
						</CardContent>
						<CardContent>
							<Typography variant="subtitle1">{"Name:  " + props.product.name}</Typography>
							<Typography variant="subtitle1">{"Price: " + props.product.price}:-</Typography>
						</CardContent>
					</Card>
					{/* <Card style={{display: 'flex', margin: '1rem 0 1rem 0'}} >
						<CardContent>
							<img
								className={classes.imgCart}
								alt="complex"
								src={props.product.img}
							/>
						</CardContent>
						<CardContent>
							<Typography variant="subtitle1">{"Name:  " + props.product.name}</Typography>
							<Typography variant="subtitle1">{"Price: " + props.product.price}:-</Typography>
						</CardContent>
					</Card>
					<Card style={{display: 'flex', margin: '1rem 0 1rem 0'}} >
						<CardContent>
							<img
								className={classes.imgCart}
								alt="complex"
								src={props.product.img}
							/>
						</CardContent>
						<CardContent>
							<Typography variant="subtitle1">{"Name:  " + props.product.name}</Typography>
							<Typography variant="subtitle1">{"Price: " + props.product.price}:-</Typography>
						</CardContent>
					</Card>
					<Card style={{display: 'flex', margin: '1rem 0 1rem 0'}} >
						<CardContent>
							<img
								className={classes.imgCart}
								alt="complex"
								src={props.product.img}
							/>
						</CardContent>
						<CardContent>
							<Typography variant="subtitle1">{"Name:  " + props.product.name}</Typography>
							<Typography variant="subtitle1">{"Price: " + props.product.price}:-</Typography>
						</CardContent>
					</Card> */}
				</Box>
			);
		case "listitem":
			return <div>listItem</div>;
		case "fullpage":
			return (
				<Grid container spacing={4}>
					<Grid item xs={12} sm={6}>
						<img
							className={classes.img}
							alt="complex"
							src={props.product.img}
						/>
					</Grid>

					<Grid item xs={12} sm={6}>
						<Grid xs={12} sm={6}>
							<Typography variant="h3">{props.product.name}</Typography>
							<Typography variant="h5">{props.product.price}:-</Typography>
							<Typography variant="subtitle2">
								incl. VAT, plus shipping cost
							</Typography>
						</Grid>
						<Grid xs={12} sm={8}>
							<Typography variant="h6">choose size :</Typography>
							<ButtonGroup
								size="medium"
								aria-label="medium outlined button group">
								{props.product.info?.sizes.map(size => (
									<Button key={size} variant="contained" color="secondary">
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
				</Grid>
			);
	}
}
