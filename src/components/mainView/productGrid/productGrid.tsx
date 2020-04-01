import React from "react";

import {
	Grid,
	makeStyles,
	Theme,
	createStyles,
	Container,
	Typography,
} from "@material-ui/core";
import CardFactory from "../../productFactory/productFactory";
import { ProductContext } from "../../../contexts/productContext";

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
		},
		modalWrapper: {
			width: "100vw",
			height: "100vh",
			display: "flex",
			justifyContent: "center",
			alignItems: "center"
		},
		modalContent: {
			width: "50%",
			height: "60%",

			margin: "5rem",
			padding: "2rem"
		}
	})
);

interface Props {
	handleClick?: () => void;
}

function useForceUpdate() {
	const [value, setValue] = React.useState(0); // integer state
	return () => setValue(value => ++value); // update the state to force render
}

function ProductGrid(props: Props) {
	const classes = useStyles();

	return (
		<ProductContext.Consumer>
			{({ products }) => (
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
							{products.map((product: any) => (
								<Grid key={product.serial} item xs={12} sm={6} md={4}>
									<CardFactory product={product} handleClick={props.handleClick} productShape="card" />
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

