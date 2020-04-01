import React from "react";

import { RouteChildrenProps, withRouter } from "react-router";
import CardFactory from "../../productFactory/productFactory";
import {
	Container,
	makeStyles,
	Theme,
	createStyles,
	Paper
} from "@material-ui/core";
import { ProductContext } from "../../../contexts/productContext";
import { Product } from "../../../interfaces&types/interfaces";
import { ProductPage } from "../../productFactory/shapes";

interface Props extends RouteChildrenProps<{ serial: string }> {handleClick: () => void;}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		wrapper: {
			minHeight: "100vh",
			height: "100%",

			display: "flex",
			alignItems: "center",
			padding: theme.spacing(1)
		},
		root: {
			flexGrow: 1,
			paddingBottom: "4rem"
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

const ProductView = ({ match }: any, props: Props) => {
	const classes = useStyles();

	const serialNumber = parseInt(match.params.serial);

	return (
		<ProductContext.Consumer>
			{value => (
				<Container maxWidth="lg" className={classes.wrapper}>
					<div className={classes.root}>
						<Paper className={classes.paper}>
							{value.products.map((product: Product) =>
								product.serial === serialNumber ? (
									<CardFactory key={serialNumber} product={product} handleClick={props.handleClick} productShape="fullpage" />
								) : null
							)}
						</Paper>
					</div>
				</Container>
			)}
		</ProductContext.Consumer>
	);
};

export default withRouter(ProductView);
