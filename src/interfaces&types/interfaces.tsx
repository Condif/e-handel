import { Sizes } from "./types";

export interface Product {
	name: string;
	serial?: number;
	img: string;
	price: number;
	desc: string;

	info?: {
		sizes: Sizes[];
		colors: string[];
	};
}
export interface NewProduct {
	name: string;
	img: string;
	price: number;
	desc: string;
}
