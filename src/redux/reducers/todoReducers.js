import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from "../actions/todosActions";

const initialState = {
  // allIds: [],
  // byIds: {}
  todos: [],
};

export default function(state = initialState.todos, action) {
      // console.log(action.type)

  switch (action.type) {
    case ADD_TODO: {
      // console.log(state)
      const { id, content } = action.payload;
      const newTodosList = [
        ...state,
        {id: id, content: content, completed:false}  
      ] 
      // console.log(newTodosList)
      return newTodosList
    }
    case TOGGLE_TODO: {
      const { id } = action.payload;
      
      return state.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    }

    case REMOVE_TODO: {
      const { id } = action.payload;
      
      return state.filter(todo => todo.id !== id)
    }

    default:
      return state;
  }
}