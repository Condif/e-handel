import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import {
	Card,
	CardHeader,
	Typography,
	CardMedia,
	CardContent,
	CardActions,
	Collapse,
	Avatar,
	IconButton
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Product } from "../mockProducts/iProduct";

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
		}
	})
);

interface Props {
	product: Product;
}

export default function CardFactory(props: Props) {
	const classes = useStyles();
	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
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

			<CardMedia
				className={classes.media}
				image={props.product.img}
				onClick={handleExpandClick}
			/>

			<CardActions disableSpacing>
				<IconButton aria-label="add to favorites">
					<FavoriteIcon />
				</IconButton>

				<IconButton aria-label="addToCard">
					<ShoppingCartIcon />
				</IconButton>
	
			</CardActions>
		</Card>
	);
}
