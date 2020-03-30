import React from "react";

import { RouteChildrenProps } from "react-router";
import { ProductList } from "../mockProducts/productsAPI";
import CardFactory from "../cardFactory/cardFactory";
import {
	CssBaseline,
	Container,
	Typography,
	Grid,
	makeStyles,
	Theme,
	createStyles,
	Paper,
	Button
} from "@material-ui/core";

interface Props extends RouteChildrenProps<{ serial: string }> {addToCart: () => void}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1
		},
		wrapper: {
			minHeight: "100vh",
			height: "100%"
		},
		paper: {
			height: "100%",
			padding: theme.spacing(3),
			color: theme.palette.text.secondary
		},
		title: {
			padding: theme.spacing(2)
		}
	})
);

const ProductView: React.FC<Props> = ({ match }: any, props: Props) => {
	const classes = useStyles();

	const serialNumber = parseInt(match.params.serial);

	const product = ProductList[serialNumber - 1] || undefined;

	return (
		<Container maxWidth="lg" className={classes.wrapper}>
			<Button onClick={(event) => props.addToCart}></Button>
			<Typography variant="h3" className={classes.title}>
				Product view
			</Typography>
			<div className={classes.root}>
				<Paper className={classes.paper}>
					<CardFactory product={product} view="fullpage" />
				</Paper>
			</div>
		</Container>
	);
};

export default ProductView;
