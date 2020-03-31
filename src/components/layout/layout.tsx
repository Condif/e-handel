import React from "react";

import MainView from "../mainView/mainView";
import Footer from "../footer/footer";
import AdminControlls from "../adminControlls/adminControlls";

import { CssBaseline } from "@material-ui/core";

function Layout() {
	return (
		<div>
			<CssBaseline />

			<AdminControlls />
			<MainView />
			<Footer />
		</div>
	);
}

export default Layout;
