import { PaymentOption } from "../components/mainView/register/paymentOptions/paymentAPI";
import { DeliveryOption } from "../components/mainView/register/deliveryOptions/deliveryAPI";
import { RegisterInputValues } from "../components/mainView/register/registerAPI";

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

export interface Receipt {
	alternate: boolean;

	firstName: string;
	lastName: string;
	mobileNumber: string;

	altFirstName?: string;
	altLastName?: string;
	altMobileNumber?: string;

	address: string;
	postal: string;
	city: string;
	cardNumber: string;

	cost: {
		subtotal: number;
		vat: number;
	};

	delivery: DeliveryOption;
	payment: PaymentOption;

	cart: { product: Product; amount: number }[];
}
