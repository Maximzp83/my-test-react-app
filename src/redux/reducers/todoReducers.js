import { 
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  SAVE_TODO
 } from "../actions/todosActions";

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
      console.time('1')
      let newTodosList2 = [
        ...state,
        {id: id, content: content, completed:false}  
      ]
      console.timeEnd('1')
      // console.log(state)
      console.time('2')
      let newTodosList = [];
      for (var i = 0; i < state.length; i++) {
        newTodosList.push(state[i])
      }

      newTodosList.push({id: id, content: content, completed:false})
      console.timeEnd('2')

      // console.log(newTodosList)
      // newTodosList.push({id: id, content: content, completed:false})
      // console.log(newTodosList)

      // console.log(newTodosList)
      return newTodosList
    }
    case TOGGLE_TODO: {
      const { id } = action.payload;
      
      return state.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    }

    case SAVE_TODO: {
      const { id, content } = action.payload;
      
      return state.map(todo =>
        todo.id === id ? { ...todo, content: content } : todo
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