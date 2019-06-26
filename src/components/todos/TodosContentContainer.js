import React, { Component } from 'react';

import TodosForm from './TodosForm';
import TodosList from './TodosList';


// import { findItemBy } from '../../helpers/helperFunctions'
// ------------

class TodosContentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      message: '',
      todos: [],
      inputValue: '' 
    };

      // console.log(this.props.location.pathname)

    // this.handleInputChange = this.handleInputChange.bind(this);
    // this.saveButtonClick = this.saveButtonClick.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleDelete = this.handleDelete.bind(this);
    // this.handleDelete = this.handleDelete.bind(this);

  }

  handleInputChange = inputValue => {
    // console.log(value)
    // this.setState({message: event.target.value})
    // this.setState({ inputValue: value })
    this.setState({ inputValue })
  }

   //  saveButtonClick() {
   //   // let updatedList = this.state.savedMessages.concat(this.state.message);
   //   // this.setState({savedMessages: updatedList});
   //   this.setState(prevState => ({
            //  savedMessages: prevState.savedMessages.concat(this.state.message)
   //   }));
            // this.messageInput.value = '';
   //  }

  handleSubmit = e => {

    e.preventDefault();
    // console.log(e.target)

    if (!this.state.inputValue) {
      return;
    }

    const newItem = {
      text: this.state.inputValue,
      id: Date.now(),
      complete: false,
    }
    // console.time('submit')
    // console.log(this.state.todos)
    var list = this.state.todos
    list.push(newItem)
    this.setState({
      todos: list,
      inputValue: '' 
    });

    // console.timeEnd('submit')

    /*this.setState(prevState => ({
      todos: [...prevState.todos, newItem],
      inputValue: '' 
    }));*/
  }

  handleDelete = id => {
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
  }


  render() {
    const { todos, inputValue } = this.state;

    return (
      <div className="contentWrapper">
        <div className="container">
          <h1>Todos page</h1>
          <hr/>

          <TodosForm
            inputValue={inputValue}
            handleInputChange={this.handleInputChange}
            handleSubmit={this.handleSubmit}
            // handleInputChange={(e) => this.handleInputChange(e)}
          />

          <TodosList
            todos={todos}
            handleCompleteChange={this.handleCompleteChange}
            handleDelete={this.handleDelete}
          />
        </div>
      </div>

    );
  }
}


export default TodosContentContainer;