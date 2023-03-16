import React, { Component } from "react";
import { connect } from "react-redux";


class FrozenFoodComponent extends Component {
	render() {
		console.log(this.props.frozenData);

		const frozenItems = this.props.frozenData.map((item, i) => {
			console.log(item);
			return (
				<li key={i}>
					{item.name}: {item.quantity}
				</li>
			);
		});
		return (
			<div>
				<h1>Frozen Food Component</h1>
				<ul>{frozenItems}</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		frozenData: state.frozen,
	};
}

export default connect(mapStateToProps)(FrozenFoodComponent);
