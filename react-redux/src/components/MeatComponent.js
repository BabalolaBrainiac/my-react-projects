import React, { Component } from "react";
import { connect } from "react-redux";

class Meat extends Component {
	render() {
		console.log(this.props.meat);

		const meatItems = this.props.meat.map((item, i) => {
			console.log(item);
			return (
				<li key={i}>
					{item.name}: {item.quantity}
				</li>
			);
		});
		return (
			<div>
				<h1> Meat Component</h1>
				<ul>{meatItems}</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		meat: state.meat,
	};
}

export default connect(mapStateToProps)(Meat);
