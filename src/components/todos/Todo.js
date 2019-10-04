import React from "react";
import PropTypes from 'prop-types';

// import { connect } from "react-redux";
// import { toggleTodo, removeTodo } from "../../redux/actions/todosActions";

/*const Todo = ({ todo, toggleTodo, removeTodo }) => (
  <li className={todo.completed ? "complete" : ""}>
    <input  type="checkbox"
      defaultChecked={todo.completed}
      onChange={() => toggleTodo(todo.id)}
    />
    {todo.content}
    <button className="deleteButton" type="button"
      onClick={() => removeTodo(todo.id)}
    >X</button>
  </li>
);*/

const Todo = ({todo, toggleTodo, removeTodo}) => (
  <li className={todo.completed ? "complete" : ""}>
    <input  type="checkbox"
      defaultChecked={todo.completed}
      onChange={() => toggleTodo(todo.id)}
    />
    {todo.content}
    <button className="deleteButton" type="button"
      onClick={() => removeTodo(todo.id)}
    >X</button>
  </li>
);

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};

export default Todo;
/*export default connect(
  null,
  { toggleTodo, removeTodo }
)(Todo);*/
