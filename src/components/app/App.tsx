import React from "react";
import "./App.css";
import Footer from "../footer/footer";
import CardMaker from "../cardMaker/cardMaker";

import { Container } from "@material-ui/core";
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline";
import { ProductList } from "../mockProducts/products";

function App() {
	return (
		<ScopedCssBaseline>
			<Container>
				{ProductList.map((card: any) => (
					<CardMaker key={card.serial} product={card}></CardMaker>
				))}
			</Container>

			<Footer />
		</ScopedCssBaseline>
	);
}

export default App;
