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
      const { id, content } = action.payload;
      // console.log(state)
      return [...state, {id: id, content: content, completed:false}]
    }
    case TOGGLE_TODO: {
      const { id } = action.payload;
      let list = state;
      /*list = state.map((todo) => {
        todo.id === id ? todo.completed = !todo.completed : null;
      })*/
      for (var i = 0; i < list.length; i++) {
        if (list[i].id === id) {list[i].completed = !list[i].completed}
      }
      console.log(list)
      return [...list]
    }

    case REMOVE_TODO: {
      // const { id } = action.payload;
      // var todo = { ...state.byIds[id], id }
      // console.log(state.byIds[id])
      // state.allIds.filter(item => item !== id);
      // console.log(state.allIds.filter(item => item !== id))
      console.log(state.byIds)
      var newList = [state.byIds]
      console.log(newList)
      return {
        ...state,
        allIds: {...state.allIds.filter(item => item !== id)},

        byIds: {
          ...state.byIds.map(todo => todo.id === id ? console.log(todo) : null)
        }
      };
      return state
    }
    default:
      return state;
  }
}