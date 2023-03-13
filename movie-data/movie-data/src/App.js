import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";

function App() {
	return (
		<Router>
			<div className="App">
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
				</ul>
				<Routes>
					<Route exact path="/" Component={Home} />
					<Route exact path="/about" Component={About} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
