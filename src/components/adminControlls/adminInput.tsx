import React from "react";
import { Grid, FormControl, Input, FormHelperText } from "@material-ui/core";

interface Props {
	name: string;
	hook: any;
	setHook: any;
}

function AdminInput(props: Props) {
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
					placeholder={props.name}
				/>
				<FormHelperText id="filled-weight-helper-text">
					{props.name} of new product
				</FormHelperText>
			</FormControl>
		</Grid>
	);
}

export default AdminInput;
