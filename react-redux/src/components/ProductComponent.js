import React, { Component } from "react";
import { connect } from "react-redux";

class Product extends Component {
	render() {
		console.log(this.props.product);

		const products = this.props.product.map((item, i) => {
			console.log(item);
			return (
				<li key={i}>
					{item.name}: {item.quantity}
				</li>
			);
		});
		return (
			<div>
				<h1>Product Component</h1>
				<ul>{products}</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		product: state.product,
	};
}

export default connect(mapStateToProps)(Product);
