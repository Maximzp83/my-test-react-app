import React, { Component } from "react";
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

/*const Todo = ({todo, toggleTodo, removeTodo}) => (
  <li className={todo.completed ? "complete" : ""}>
    <input  type="checkbox"
      defaultChecked={todo.completed}
      onChange={() => toggleTodo(todo.id)}
    />
    <div className="">{todo.content}</div>

    <input type="text" value={todo.content}/>

    <button className="deleteButton" type="button"
      onClick={() => removeTodo(todo.id)}
    >X</button>
  </li>
);*/

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodoContent: '',
      showEditInput: false
    };
  }

  /*componentDidUpdate() {
    console.log('Todo DidUpdate')
  }*/

  handleInputChange = e => {
    // console.log(value)
    // this.setState({message: event.target.value})
    // this.setState({ inputValue: value })
    this.setState({ newTodoContent: e.target.value })
    // console.log(this.state)
  }

  toggleEditTodo = () => {
    this.setState({ 
      showEditInput: !this.state.showEditInput,
      newTodoContent: this.props.todo.content
    })
  }

  handleSaveTodo = () => {
    // console.log(this.state.newTodoContent)
    // console.log(addTodo)
    if (!this.state.newTodoContent) return;

    this.props.saveTodo({'id': this.props.todo.id, 'content': this.state.newTodoContent});
    this.setState({ showEditInput: false })
  }

  render() {
    const { todo, toggleTodo, removeTodo } = this.props;
    const { newTodoContent, showEditInput } = this.state;

    return(
      <li className={todo.completed ? "complete" : ""}>
        <input  type="checkbox"
          defaultChecked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />

        <span className="" onClick={this.toggleEditTodo}>{todo.content}</span>

        <button className="deleteButton" type="button"
          onClick={() => removeTodo(todo.id)}
        >X</button>
        
        { showEditInput && 
          <div className="editBlock">
            <input type="text" value={newTodoContent}
              onChange={this.handleInputChange}/>
            
            <button type="button" 
              onClick={this.handleSaveTodo}
            >save</button>
          </div>
        }
        
      </li>
    )

  }
}


Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  saveTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};

export default Todo;
/*export default connect(
  null,
  { toggleTodo, removeTodo }
)(Todo);*/
