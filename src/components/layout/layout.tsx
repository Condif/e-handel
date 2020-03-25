import React from "react";

import MainView from "../mainView/mainView";
import Footer from "../footer/footer";
import { CSSProperties } from "@material-ui/core/styles/withStyles";
import Cart from "../cart/cart";

function Layout() {
	return (
		<div style={style}>
			{/* <Topbar /> */}
			<MainView />
			<Footer />
			<Cart />
		</div>
	);
}

export default Layout;

const style: CSSProperties = {
	background: " #fff"
};
