import React, { useEffect } from "react";

import {
	Grid,
	makeStyles,
	Theme,
	createStyles,
	Container,
	Typography
} from "@material-ui/core";
import CardFactory from "../../productFactory/productFactory";
import { ProductContext } from "../../../contexts/productContext";
import { ProductList } from "../../productsAPI/productsAPI";
import { CSSProperties } from "@material-ui/core/styles/withStyles";
import { Product } from "../../../interfaces&types/interfaces";

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

function useForceUpdate() {
	const [value, setValue] = React.useState(0); // integer state
	return () => setValue(value => ++value); // update the state to force render
}

interface Props {
	addNewProduct: () => void;
	products: Product[];
}

function ProductGrid(props: Props) {
	const classes = useStyles();

	return (
		<ProductContext.Consumer>
			{({products, removeLastItem, addNewItem}) => (
				<Container maxWidth="lg" disableGutters={false}>
					<Typography variant="h2" className={classes.header}>
						Products
					</Typography>

					<div style={btnWrapper}>
						<button onClick={removeLastItem}>
							-
						</button>
					</div>
					<div style={btnWrapper}>
						<button onClick={addNewItem}>
							+
						</button>
					</div>

					<Grid
						container
						direction="column"
						justify="flex-start"
						alignItems="stretch"
						style={{ marginBottom: "5rem" }}>
						<Grid container justify="center" spacing={2}>
							{products.map((product: any) => (
								<Grid key={product.serial} item xs={12} sm={6} md={4}>
									<CardFactory product={product} productShape="card" />
								</Grid>
							))}
						</Grid>
					</Grid>
				</Container>
			)}
		</ProductContext.Consumer>
	);
}

export default ProductGrid;

const btnWrapper: CSSProperties = {
	position: "absolute",
	top: 10,
	left: "50%",
	transform: "translatex(-50%)"
};
const btnStyle: CSSProperties = {
	margin: ".2rem"
};
