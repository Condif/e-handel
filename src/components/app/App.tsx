import React from "react";
import "./App.css";
import Footer from "../footer/footer";
import CardMaker from "../cardMaker/cardMaker";

import { Container } from "@material-ui/core";
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline";
import { ProductList } from "../mockProducts/products";
import Structure from "../layout/structure";

function App() {
	return (
		<ScopedCssBaseline>
			<Structure/>
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
