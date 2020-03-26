import React from "react";

import { RouteChildrenProps } from "react-router";
import { ProductList } from "../../mockProducts/productsAPI";
import CardFactory from "../../productFactory/productFactory";
import {
	CssBaseline,
	Container,
	Typography,
	Grid,
	makeStyles,
	Theme,
	createStyles,
	Paper
} from "@material-ui/core";

interface Props extends RouteChildrenProps<{ serial: string }> {}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		wrapper: {
			minHeight: "100vh",
			height: "100%",

			display:"flex",
			alignItems:"center",
			padding: theme.spacing(1)
		},
		root: {
			flexGrow: 1,
			paddingBottom:"4rem",
			
		},
		paper: {
			height: "100%",
			padding: theme.spacing(2),
			color: theme.palette.text.secondary
		},
		title: {
			padding: theme.spacing(1)
		}
	})
);

const ProductView: React.FC<Props> = ({ match }: any) => {
	const classes = useStyles();

	const serialNumber = parseInt(match.params.serial);

	const product = ProductList[serialNumber - 1] || undefined;

	return (
		<Container maxWidth="lg" className={classes.wrapper} >
			<div className={classes.root}>
				<Paper className={classes.paper}>
					<CardFactory product={product} productShape="fullpage" />
				</Paper>
			</div>
		</Container>
	);
};

export default ProductView;
