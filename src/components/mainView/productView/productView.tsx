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

interface Props extends RouteChildrenProps<{ serial: string }> {}

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

const ProductView = ({ match }: any) => {
	const classes = useStyles();
	const serialNumber = parseInt(match.params.serial);

	return (
		<ProductContext.Consumer>
			{value => (
				<Container maxWidth="lg" className={classes.wrapper}>
					<div className={classes.root}>
						<Paper className={classes.paper}>
							<CardFactory
								product={value.products[parseInt(match.params.serial) - 1]}
								productShape="fullpage"
							/>
						</Paper>
					</div>
				</Container>
			)}
		</ProductContext.Consumer>
	);
};

export default withRouter(ProductView);
