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
		console.log("in edit mode");
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
				placeHolder = props.placeHolder?.price;
				break;
		}
	}

	if (
		props.hook.name != undefined &&
		props.hook.desc != undefined &&
		props.hook.img != undefined &&
		props.hook.price != undefined
	) {
		props.formHook(true);
	}

	return (
		<Grid item sm={12} md={6}>
			<FormControl fullWidth>
				{/* <Input
					id={props.name}
					onChange={(event: any) =>
						props.setHook({
							...props.hook,
							[`${props.name}`]: event.target.value
						})
					}
					placeholder={placeHolder}
				/> */}
				<TextField
					required
					id={props.name}
					label={"enter " + placeHolder}
					placeholder={placeHolder}
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
