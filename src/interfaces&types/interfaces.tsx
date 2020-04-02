export interface Product {
	name: string;
    desc: string;
	img: string;
	
	price: number;
	serial?: number;
}
export interface NewProduct {
	name: string;
	img: string;
	desc: string;

	price: number;
}
