import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "../../contexts/productContext";

import Layout from "../layout/layout";

function App() {
	
	
	return (
		<BrowserRouter>
			<ProductProvider>
				<Layout />
			</ProductProvider>
		</BrowserRouter>
	);
}

export default App;
