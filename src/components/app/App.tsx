import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "../../contexts/productContext";
import { AdminProvider } from "../../contexts/admin";

import Layout from "../layout/layout";

function App() {
	return (
		<BrowserRouter basename={'/e-handel'} >
			<AdminProvider>
				<ProductProvider>
					<Layout />
				</ProductProvider>
			</AdminProvider>
		</BrowserRouter>
	);
}

export default App;
