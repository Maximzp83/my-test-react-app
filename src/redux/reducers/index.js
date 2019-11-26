import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import todos from "./todoReducers";
import posts from "./postsReducers";

export default combineReducers({ 
	todos, visibilityFilter, posts 
});
