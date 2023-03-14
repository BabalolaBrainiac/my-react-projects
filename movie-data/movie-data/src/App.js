import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Movie from "./components/Movie";

function App() {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route exact path="/" Component={Home} />
					<Route exact path="/movie/:movieId" Component={Movie} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
