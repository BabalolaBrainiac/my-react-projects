import { combineReducers } from "redux";
import { frozenReducer } from "./frozenReducer";
import { meatReducer } from "./meatReducer";
import { productReducer } from "./productReducer";

export const rootReducer = combineReducers({
	frozen: frozenReducer,
	meat: meatReducer,
	product: productReducer,
});
