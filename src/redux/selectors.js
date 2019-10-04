import { VISIBILITY_FILTERS } from "./constants";

/*export const getTodosState = store => store.todos;

export const getTodoList = store =>
  getTodosState(store) ? getTodosState(store).todos : [];

export const getTodoById = (store, id) =>
  getTodosState(store) ? { ...getTodosState(store).todos[id], id } : {};*/

/**
 * example of a slightly more complex selector
 * select from store combining information from multiple reducers
 */
export const getTodos = store => {
  // console.log(store)
  return store.todos
}
  // getTodoList(store).map(id => getTodoById(store, id));


export const getTodosByVisibilityFilter = (store, visibilityFilter) => {
  const allTodos = getTodos(store);
  // console.log(visibilityFilter)

  switch (visibilityFilter) {
    case VISIBILITY_FILTERS.COMPLETED:
      // console.log(allTodos.filter(todo => todo.completed))
      return allTodos.filter(todo => todo.completed);
    case VISIBILITY_FILTERS.INCOMPLETE:
      return allTodos.filter(todo => !todo.completed);
    case VISIBILITY_FILTERS.ALL:
    default:
      return allTodos;
  }
};
