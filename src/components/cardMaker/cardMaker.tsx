import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { Card, CardHeader, Typography, CardMedia, CardContent, CardActions, Collapse, Avatar, IconButton,} from '@material-ui/core'
import { red } from "@material-ui/core/colors";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Product } from "../mockProducts/iProduct";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			maxWidth: 345,
			margin: ".5rem"
		},
		media: {
			height: 0,
			paddingTop: "56.25%" // 16:9
		},
		expand: {
			transform: "rotate(0deg)",
			marginLeft: "auto",
			transition: theme.transitions.create("transform", {
				duration: theme.transitions.duration.shortest
			})
		},
		expandOpen: {
			transform: "rotate(180deg)"
		},
		avatar: {
			backgroundColor: red[500]
		}
	})
);

interface Props {
	product: Product;
}

export default function CardMaker(props: Props) {
	const classes = useStyles();
	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		<Card className={classes.root}>
			<CardHeader
				avatar={
					<Avatar aria-label="recipe" className={classes.avatar}>
						P
					</Avatar>
				}
				action={
					<IconButton aria-label="addToCard">
						<ShoppingCartIcon />
					</IconButton>
				}
				title={props.product.name}
				subheader={props.product.price}
			/>
			<CardMedia
				className={classes.media}
				image={props.product.img}
			/>

			<CardActions disableSpacing>
				<IconButton aria-label="add to favorites">
					<FavoriteIcon />
				</IconButton>
				<IconButton aria-label="share">
					<ShareIcon />
				</IconButton>
				<IconButton
					className={clsx(classes.expand, {
						[classes.expandOpen]: expanded
					})}
					onClick={handleExpandClick}
					aria-expanded={expanded}
					aria-label="show more">
					<ExpandMoreIcon />
				</IconButton>
			</CardActions>

			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<CardContent>
					<Typography paragraph>Description:</Typography>
					<Typography paragraph>
						{props.product.desc}
					</Typography>
				</CardContent>
			</Collapse>
		</Card>
	);
}
