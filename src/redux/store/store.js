import {applyMiddleware, createStore } from "redux";
import rootReducer from "../reducers";
import thunk from "redux-thunk"

const middlewares = [thunk]
// console.log(middlewares)
export default createStore(
	rootReducer,
	applyMiddleware(...middlewares),
	// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);
