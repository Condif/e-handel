import React from "react";

export const AdminContext = React.createContext<State>({
	admin: true,
	toggleAdmin: () => {}
});

interface Props {}
interface State {
	admin: Boolean;

	toggleAdmin: () => void;
}

export class AdminProvider extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);

		this.state = {
			admin: true,

			toggleAdmin: this.toggleAdmin
		};
	}
	// - - - - CART
	toggleAdmin = () => {
		this.setState({
			admin: !this.state.admin
		});
	};

	render() {
		return (
			<AdminContext.Provider value={this.state}>
				{this.props.children}
			</AdminContext.Provider>
		);
	}
}
