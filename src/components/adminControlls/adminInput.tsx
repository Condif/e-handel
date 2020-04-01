import React from "react";
import { Grid, FormControl, Input, FormHelperText } from "@material-ui/core";
import { Product } from "../../interfaces&types/interfaces";

interface Props {
	mode: "edit" | "add";

	name: string;
	placeHolder?: Product;
	hook: any;
	setHook: any;
}

function AdminInput(props: Props) {
	let placeHolder: any;

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

	return (
		<Grid item sm={12} md={6}>
			<FormControl fullWidth>
				<Input
					id={props.name}
					onChange={(event: any) =>
						props.setHook({
							...props.hook,
							[`${props.name}`]: event.target.value
						})
					}
					placeholder={placeHolder}
				/>
				<FormHelperText id="filled-weight-helper-text">
					{props.name} of new product
				</FormHelperText>
			</FormControl>
		</Grid>
	);
}

export default AdminInput;
