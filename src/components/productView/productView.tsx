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
	createStyles
} from "@material-ui/core";

interface Props extends RouteChildrenProps<{ serial: string }> {}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		wrapper: {
			minHeight: "100vh",
			height: "100%"
		}
	})
);

const ProductView: React.FC<Props> = ({ match }: any) => {
	const classes = useStyles();

	const serialNumber = parseInt(match.params.serial);

	const product = ProductList[serialNumber - 1] || undefined;

	return (
		<Container maxWidth="md" className={classes.wrapper}>
			<CardFactory product={product} view="fullpage" />
		</Container>
	);
};

export default ProductView;
