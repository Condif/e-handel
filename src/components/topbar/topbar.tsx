import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import IconButton from "@material-ui/core/IconButton";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import { AdminContext } from "../../contexts/admin";
import AdminControlls from "../adminControlls/adminControlls";

import logo from "../../assets/flowerLogo.png";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1
		},
		title: {
			flexGrow: 1
		},
		logo: {
			height: "2rem"
		}
	})
);

interface Props {
	isOpen: boolean;
	toggleDrawer: (anchor: string, open: boolean) => void;
}

function Topbar(props: Props) {
	const classes = useStyles();
	const [auth, setAuth] = React.useState(false);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement> | any) => {
		setAuth(event.target.checked);
	};

	return (
		<AdminContext.Consumer>
			{value => (
				<div className={classes.root}>
					<AppBar
						position="static"
						style={{
							height: "4rem",
							background:"#34a864"
						}}>
						<Toolbar
							style={{
								display: "flex",
								justifyContent: "space-between",
								background: "#f4f4f4"
							}}>
							<div
								style={{
									width: "4rem",
									height: "3rem",
									display: "flex",
									alignItems: "center"
								}}>
								<FormGroup>
									<Switch
										checked={auth}
										onChange={handleChange}
										onClick={value.toggleAdmin}
										aria-label="admin switch"
									/>
								</FormGroup>
								{value.admin ? (
									<AdminControlls auth={auth} />
								) : (
									<AdminControlls auth={auth} />
								)}
							</div>

							<Link to="/">
								<img src={logo} alt="logo" className={classes.logo} />
							</Link>

							<IconButton
								style={{
									width:"4rem",
									color: "#333"
								}}
								edge="start"
								aria-label="menu">
								<ShoppingCartIcon
									onClick={event => props.toggleDrawer("right", true)}
								/>
							</IconButton>
						</Toolbar>
					</AppBar>
				</div>
			)}
		</AdminContext.Consumer>
	);
}

export default Topbar;
