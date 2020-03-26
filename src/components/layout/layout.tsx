import React from "react";

import MainView from "../mainView/mainView";
import Footer from "../footer/footer";
import { CssBaseline } from "@material-ui/core";

function Layout() {
	return (
		<div>
			<CssBaseline />
			<MainView />
			<Footer />
		</div>
	);
}

export default Layout;
