import React from "react";
import {
	Grid,
	FormControl,
	FormHelperText,
	TextField
} from "@material-ui/core";
import { Product } from "../../interfaces&types/interfaces";

interface Props {
	mode: "edit" | "add";

	name: string;
	hook: any;
	setHook: any;
	placeHolder?: Product;
	formHook?: any;
}

function AdminInput(props: Props) {
	let placeHolder: any = props.name;

	if (props.mode === "edit") {
		switch (props.name) {
			case "name":
				placeHolder = props.placeHolder?.name;
				break;
			case "desc":
				placeHolder = props.placeHolder?.desc;
				break;
			case "img":
				placeHolder = props.placeHolder?.img;
				break;
			case "price":
				placeHolder = props.placeHolder?.price.toString();
				break;
		}
	}

	if (
		props.mode === "add" &&
		props.hook.name !== undefined &&
		props.hook.desc !== undefined &&
		props.hook.img !== undefined &&
		props.hook.price !== undefined
	) {
		props?.formHook(true);
	}

	return (
		<Grid item sm={12} md={6}>
			<FormControl fullWidth>
				<TextField
					required
					type={props.name === "price" ? "number" : "text"}
					id={props.name}
					label={
						props.mode === "edit"
							? "enter new " + props.name
							: "enter " + props.name
					}
					placeholder={placeHolder ? placeHolder : ""}
					onChange={(event: any) =>
						props.setHook({
							...props.hook,
							[`${props.name}`]: event.target.value
						})
					}
				/>
				<FormHelperText id="filled-weight-helper-text">
					{props.name} of new product
				</FormHelperText>
			</FormControl>
		</Grid>
	);
}

export default AdminInput;
