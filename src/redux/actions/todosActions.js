export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const SAVE_TODO = "SAVE_TODO";

export const SET_FILTER = "SET_FILTER";


// import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from "./actionTypes";

let nextTodoId = 0;

export const addTodo = content => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content
  }
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id }
});

export const removeTodo = id => ({
  type: REMOVE_TODO,
  payload: { id }
});

export const saveTodo = data => ({
  type: SAVE_TODO,
  payload: { 
  	id: data.id,
  	content: data.content 
  }
});

export const setVisibilityFilter = filter => ({ type: SET_FILTER, payload: { filter } });