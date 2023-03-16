import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import { rootReducer } from "./reducers/rootReducer";
import { createStore } from "redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
// Steps to Using Redux with react

// 1. Install redux, react-redux and import the Provider component from react-redux
//2. Create the redux store
//3. Import reducers

const store = createStore(rootReducer);
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
