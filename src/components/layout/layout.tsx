import React from "react";

import MainView from "../mainView/mainView";
import Footer from "../footer/footer";
import { CSSProperties } from "@material-ui/core/styles/withStyles";

function Layout() {
	return (
		<div style={style}>
			{/* <Topbar /> */}
			<MainView />
			<Footer />
		</div>
	);
}

export default Layout;

const style: CSSProperties = {
	background: " #fff"
};
