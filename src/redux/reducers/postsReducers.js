import { ActionType } from "../actions/postsActions";

const initialState = {
  postsLoading: false,
  query: '',
  offset: 0,
  limit: 50,
  posts: [],
  error: ''
};

export default function(state = initialState, action) {
      // console.log(action.type)

  switch (action.type) {

    case ActionType.INITIALIZE_VIEW:
          return initialState;

    case ActionType.FETCH_POSTS_REQUEST: {
      console.log('request')
      return {
        ...state,
        postsLoading: true
      }
    }

    case ActionType.FETCH_POSTS_SUCCESS: {
      console.log('success')
      return {
        ...state,
        postsLoading: false,
        posts: action.payload
      }
    }

    case ActionType.FETCH_POSTS_FAILURE: {
      console.log('error')
      return {
        ...state,
        postsLoading: false,
        posts: [],
        error: action.payload
      }
    }
   

    default:
      return state;
  }
}