import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteIcon from "@material-ui/icons/Favorite";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
	root: {
		position: "fixed",
		bottom: 0,

		width: "100%",

		background: "#fefefe"
	}
});

export default function Footer() {
	const classes = useStyles();
	const [value, setValue] = React.useState("home");

	const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
		setValue(newValue);
	};
	console.log(value);

	return (
		<BottomNavigation
			value={value}
			onChange={handleChange}
			className={classes.root}>
			<BottomNavigationAction
				value="home"
				icon={
					<Link to="/">
						<HomeIcon />
					</Link>
				}
			/>
			<BottomNavigationAction
				value="favorites"
				icon={
					<Link to="/alt">
						<FavoriteIcon />
					</Link>
				}
			/>
			<BottomNavigationAction value="cart" icon={<ShoppingCartIcon />} />
		</BottomNavigation>
	);
}
