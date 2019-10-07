import React from 'react';
import PropTypes from 'prop-types';

// import { connect } from "react-redux";
// import { toggleTodo, removeTodo } from "../../redux/actions/todosActions";

// import { getTodosByVisibilityFilter } from "../../redux/selectors";

import Todo from "./Todo";


/*const mapStateToProps = state => {
  const { visibilityFilter } = state;
  // console.log(state)
  
  const todos = getTodosByVisibilityFilter(state, visibilityFilter);
  // console.log(todos)
  return { todos };
};*/

const TodosList = ({ todos, toggleTodo, removeTodo, saveTodo }) => (
  <ul className="messagesList">
    {todos && todos.length
      ? todos.map((todo, index) => {
          return <Todo 
            key={`todo-${todo.id}`}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
            saveTodo={saveTodo}            
            todo={todo} />;
        })
      : <h3>No todos</h3>}
  </ul>
);

TodosList.propTypes = {
  toggleTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  saveTodo: PropTypes.func.isRequired,
};
export default TodosList;	   
// export default connect(mapStateToProps)(TodosList);
