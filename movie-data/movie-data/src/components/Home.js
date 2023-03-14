import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { apiKey } from "../config";

export default class Home extends Component {
	constructor() {
		super();
		this.state = {
			movieList: [],
		};
	}

	componentDidMount() {
		const nowPlayingUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`;

		axios.get(nowPlayingUrl).then((response) => {
			console.log(this.state.movieList);
			this.setState({
				movieList: response.data.results,
			});
		});
	}

	render() {
		const imageUrl = "http://image.tmdb.org/t/p/w300";
		const movieGrid = this.state.movieList.map((movie, index) => {
			return (
				<div className="col s3" key={index}>
					<Link to={`/movie/${movie.id}`}>
						<img alt="movie-poster" src={`${imageUrl}${movie.poster_path}`} />
					</Link>
				</div>
			);
		});

		return <div className="row">{movieGrid}</div>;
	}
}
