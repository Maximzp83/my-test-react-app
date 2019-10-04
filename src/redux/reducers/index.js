import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import todos from "./todoReducers";

export default combineReducers({ todos, visibilityFilter });
