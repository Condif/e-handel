import React from "react";
import { RouteChildrenProps, withRouter } from "react-router";
import CardFactory from "../../productFactory/productFactory";
import {
	Container,
	makeStyles,
	Theme,
	createStyles,
	Paper,
	Snackbar
} from "@material-ui/core";
import { ProductContext } from "../../../contexts/productContext";
import { Product } from "../../../interfaces&types/interfaces";
import Alert from "@material-ui/lab/Alert";

interface Props extends RouteChildrenProps<{ serial: string }> {
	handleClick: () => void;
	alertIsOpen: boolean;
	handleClose: () => void;
	product?: any;
}

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
const vertical = 'top'
const horizontal = 'center'



const ProductView = ({ match }: any, props: Props) => {
	const classes = useStyles();

	const [open, setOpen] = React.useState(false);

	const handleClick = () => {
		setOpen(true);
	};

	const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpen(false);
	};
	
	const serialNumber = parseInt(match.params.serial);
	
	function twoOnclickAlert() {
			handleClick()
		
	}
	return (
		
		<ProductContext.Consumer>
			{value => (
				<Container maxWidth="lg" className={classes.wrapper}>
					<div className={classes.root}>
						<Paper className={classes.paper}>
							{value.products.map((product: Product) =>
								product.serial === serialNumber ? (
									<CardFactory key={serialNumber} product={product}  handleClick={props.handleClick}  twoOnclickAlert={twoOnclickAlert} productShape="fullpage" />
								) : null
							)}
						</Paper>
					</div>			
					<Snackbar style={{ marginTop: '3rem' }} anchorOrigin={{ vertical, horizontal }} open={open} autoHideDuration={1250} onClose={handleClose}>
						<Alert style={{ minWidth: '15rem' }} color="info" onClose={props.handleClose} severity="success">
							Added to the cart
							</Alert>
					</Snackbar>
				</Container>
			)}
		</ProductContext.Consumer>
	);
};

export default withRouter(ProductView);
