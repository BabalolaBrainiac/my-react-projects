import React, { Component } from "react";

export default class Movie extends Component {
	constructor() {
		super();
	}

	componentDidMount(props) {
		const mid = this.props.match.params.movieId;
		console.log(mid);
	}

	render() {
		// console.log(this.props.match);
		return (
			<div>
				<h1>Movie</h1>
				{/* <h1>{this.props.match.params.movieId}</h1> */}
			</div>
		);
	}
}
