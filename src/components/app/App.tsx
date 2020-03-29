import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline";
import Layout from "../layout/layout";

function App() {
	return (
		<ScopedCssBaseline>
			<BrowserRouter >
				<Layout />
			</BrowserRouter>
		</ScopedCssBaseline>
	);
}

export default App;
