import React, { Component } from 'react';
import { connect } from "react-redux";
// import { addTodo } from "../../redux/actions/todosActions";
import { bindActionCreators } from 'redux';
import * as todosActionCreators from '../../redux/actions/todosActions';

import { getTodosByVisibilityFilter } from "../../redux/selectors";


import TodosForm from './TodosForm';
import TodosList from './TodosList';
import FilterBar from './FilterBar';

// import store from "../../redux/store/store";


// import { findItemBy } from '../../helpers/helperFunctions'
// ------------
// store.dispatch(addTodo('Learn about reducers'))
// console.log(store.getState())

class TodosContentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      // todos: [],
      inputValue: '' 
    };

      // console.log(this.props.location.pathname)

    // this.handleInputChange = this.handleInputChange.bind(this);
    // this.saveButtonClick = this.saveButtonClick.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleDelete = this.handleDelete.bind(this);
    // this.handleDelete = this.handleDelete.bind(this);

  }

  /*handleInputChange = inputValue => {
    // console.log(value)
    // this.setState({message: event.target.value})
    // this.setState({ inputValue: value })
    this.setState({ inputValue })
  }*/

  // handleSubmit = e => {
    // console.log(this.props)
    /*e.preventDefault();
    // console.log(addTodo)
    if (!this.state.inputValue) return;

    this.props.dispatch(addTodo(this.state.inputValue));
    this.setState({ inputValue: "" });*/

    // ------------

    /*const newItem = {
      text: this.state.inputValue,
      id: Date.now(),
      complete: false,
    }*/
    // console.time('submit')
    // console.log(this.state.todos)
    /*var list = this.state.todos
    list.push(newItem)
    this.setState({
      todos: list,
      inputValue: '' 
    });*/

    // console.timeEnd('submit')

    /*this.setState(prevState => ({
      todos: [...prevState.todos, newItem],
      inputValue: '' 
    }));*/
  // }

  /*handleDelete = id => {
    // let updatedList = this.state.savedMessages.filter((message, index) => index != messageIndex );
    // this.setState({savedMessages: updatedList});     

    this.setState(prevState => ({
      // savedMessages: prevState.savedMessages.filter((message, index) => index != messageIndex )
      todos: prevState.todos.filter(todo => todo.id !== id)
    }));
  }

  handleCompleteChange = todoId => {
    // console.time('check2')

    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === todoId) {
          todo.complete = !todo.complete;
          return todo
        } 
          return todo                                     
      })
    }));
    // console.timeEnd('check2')
  }*/

  /*componentDidUpdate() {
    console.log('componentDidUpdate');
  }*/

  render() {
    const { todos, dispatch, /*handleSubmit*/ } = this.props;
    // console.log(handleSubmit)
    const addTodo = bindActionCreators(todosActionCreators.addTodo, dispatch);
    const toggleTodo = bindActionCreators(todosActionCreators.toggleTodo, dispatch);
    const removeTodo = bindActionCreators(todosActionCreators.removeTodo, dispatch);

    const { /*todos,*/ inputValue } = this.state;
    return (
      <div className="contentWrapper">
        <div className="container">
          <h1>Todos page</h1>
          <hr/>
          <FilterBar />

          <TodosForm
            inputValue={inputValue}
            // handleInputChange={this.handleInputChange}
            addTodo={addTodo}
            // handleInputChange={(e) => this.handleInputChange(e)}
          />

          <TodosList
            todos={todos}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
          />
            {/*todos={todos}
            handleCompleteChange={this.handleCompleteChange}
            handleDelete={this.handleDelete}*/}
        </div>
      </div>

    );
  }

 
}

const mapStateToProps = state => {
  // console.log(state)
  const { visibilityFilter } = state;
  
  const todos = getTodosByVisibilityFilter(state, visibilityFilter);
  // console.log(todos)
  return { todos };
};

/*const mapDispatchToProps = dispatch => ({
  addTodo: e => {
    e.preventDefault();
    console.log(e.target.value)
    // var value = e.target.value;
    // if (!value) return;
    // dispatch({ type: 'ADD_TODO', payload: value })
  }
})*/


export default connect(mapStateToProps, /*mapDispatchToProps*/)(TodosContentContainer);

/*export default connect(
  null,
  { addTodo }
)(TodosContentContainer);*/
// export default TodosContentContainer;