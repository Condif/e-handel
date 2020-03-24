import React from "react";
import "./App.css";
import Footer from "../footer/footer";
import CardMaker from "../cardMaker/cardMaker";

import { Container } from "@material-ui/core";
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline";

function App() {
	const cards = [
		{
			productName: "one",
			imgSrc:
				"https://images.unsplash.com/photo-1556038024-327f281f00b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
			price: "14:-",
			description:
				"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto excepturi dolorum quia harum..."
		},
		{
			productName: "two",
			imgSrc:
				"https://images.unsplash.com/photo-1572933014070-3aec28ebba4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=897&q=80",
			price: "999:-",
			description:
				"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto excepturi dolorum quia harum..."
		},
		{
			productName: "three",
			imgSrc:
				"https://images.unsplash.com/photo-1583189774117-0d355da61fac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80",
			price: "420:-",
			description:
				"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto excepturi dolorum quia harum..."
		},
	];

	return (
		<ScopedCssBaseline>
			<Container fixed>
				{cards.map((card: any) => (
          <CardMaker product={card} ></CardMaker>
				))}
			</Container>

			<Footer />
		</ScopedCssBaseline>
	);
}

export default App;
