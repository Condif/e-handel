import React from "react";

import {
	Grid,
	makeStyles,
	Theme,
	createStyles,
	CssBaseline,
	Container,
	Typography
} from "@material-ui/core";
import CardFactory from "../cardFactory/cardFactory";
import { ProductList } from "../mockProducts/productsAPI";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
			marginBottom: "4rem"
		},
		header: {
			margin: "1rem 0",
			borderBottom: "2px solid #97ADA188",
			color: "#4B6155"
		}
	})
);

function ProductGrid() {
	const classes = useStyles();

	return (
		<React.Fragment>
			<CssBaseline />
			<Container maxWidth="lg" disableGutters={false}>
				<Typography variant="h2" className={classes.header}>
					Products
				</Typography>

				<Grid
					container
					direction="column"
					justify="flex-start"
					alignItems="stretch"
					style={{ marginBottom: "5rem" }}>
					<Grid container justify="center" spacing={2}>
						{ProductList.map(product => (
							<Grid key={product.serial} item xs={12} sm={6} md={4}>
								<CardFactory product={product} view="card" />
							</Grid>
						))}
					</Grid>
				</Grid>
			</Container>
		</React.Fragment>
	);
}

export default ProductGrid;
