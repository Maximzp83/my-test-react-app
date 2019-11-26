import * as postsAPI from '../../services/postsAPI';

export const ActionType = {
	ADD_POST: "ADD_POST",
	TOGGLE_POST: "TOGGLE_POST",
	REMOVE_POST: "REMOVE_POST",
	SAVE_POST: "SAVE_POST",
	INITIALIZE_VIEW: "INITIALIZE_VIEW",
	FETCH_POSTS_REQUEST: "FETCH_POSTS_REQUEST",
	FETCH_POSTS_SUCCESS: "FETCH_POSTS_SUCCESS",
	FETCH_POSTS_FAILURE: "FETCH_POSTS_FAILURE",
}

// export const SET_FILTER = "SET_FILTER";


// import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from "./actionTypes";

export const initializeView = () => {
  return { type: ActionType.INITIALIZE_VIEW };
}

export const fetchPostsRequest = () => {
	// console.log('request')
  return {type: ActionType.FETCH_POSTS_REQUEST}
};

export const fetchPostsSuccess = posts => ({
  type: ActionType.FETCH_POSTS_SUCCESS,
  payload: posts 
});

export const fetchPostsFailure = error => ({
  type: ActionType.FETCH_POSTS_FAILURE,
  payload: error
});

export const fetchPosts = () => {
  return (dispatch, getState) => {
    // const { query, limit, offset } = getState().posts;
    dispatch({ type: ActionType.FETCH_POSTS_REQUEST });
    
    postsAPI.fetchPosts(/*{ query, limit, offset }*/)
    	.then( posts => {
    		// console.log(posts)
        dispatch({ 
        	type: ActionType.FETCH_POSTS_SUCCESS,
        	payload: posts 
        });
      })
    	.catch( error => {
        dispatch({ type: ActionType.FETCH_POSTS_FAILURE, error });
    	})
  }
}





// export const setVisibilityFilter = filter => ({ type: SET_FILTER, payload: { filter } });