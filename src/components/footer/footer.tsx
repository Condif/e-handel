import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
// import FavoriteIcon from "@material-ui/icons/Favorite";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
// import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
const useStyles = makeStyles({
	root: {
		position: "fixed",
		bottom: 0,
		zIndex: 1,

		width: "100%",

		background: "#fefefe"
	}
});
interface Props {
    isOpen: boolean;
	toggleDrawer: (anchor: string, open: boolean) => void
	setRegisterOpen: (value:boolean) => void
	isRegisterOpen: boolean
}

const shouldCartOpen = (props: Props) => {
	if(!props.isRegisterOpen) {
		props.toggleDrawer('right', true)
	}
}

export default function Footer(props: Props) {
	const classes = useStyles();

	return (
		<BottomNavigation
			className={classes.root}>
			<BottomNavigationAction
				onClick={() => props.setRegisterOpen(false)}
				icon={
					<Link to="/" style={{
						width: '100%'
					}}>
						<HomeIcon />
					</Link>
				}
			/>
			<BottomNavigationAction 
			onClick={() => shouldCartOpen(props)}
			icon={(props.isRegisterOpen) ? 
				<ShoppingCartIcon style={{
					color: 'rgb(117,117,117,.4)'
				}} />
				: 
				<ShoppingCartIcon />
			}
			/>
			
		</BottomNavigation>
	);
}
