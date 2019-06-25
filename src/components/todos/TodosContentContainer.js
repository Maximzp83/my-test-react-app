import React, { Component } from 'react';

import TodosContent from './TodosContent';

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
    console.time('submit')
    // console.log(this.state.todos)
    var list = this.state.todos
    list.push(newItem)
    this.setState({
      todos: list,
      inputValue: '' 
    });

    console.timeEnd('submit')

    /*this.setState(prevState => ({
      todos: [...prevState.todos, newItem],
      inputValue: '' 
    }));*/

  }

  handleDelete(id) {
    // let updatedList = this.state.savedMessages.filter((message, index) => index != messageIndex );
    // this.setState({savedMessages: updatedList});     

    this.setState(prevState => ({
      // savedMessages: prevState.savedMessages.filter((message, index) => index != messageIndex )
      todos: prevState.todos.filter(todo => todo.id !== id)
    }));
  }

  handleCompleteChange(id) {

    // this.state.todos.forEach( todo => {
    //     if (todo.id === id) {
    //         todo.complete = !todo.complete;
    //     }
    // })

    // this.forceUpdate();

    // --------------

    this.setState(prevState => ({
      todos:  prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.complete = !todo.complete;
          return todo
        } 
          return todo                                     
      })
    }));

    // console.log(this.state)
  }


  render() {
    const { todos, inputValue } = this.state;

    return (
      <div className="contentWrapper">
        <TodosContent
          todos={todos}
          inputValue={inputValue}
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}
          // handleDelete={(e) => this.handleDelete(e)}
          // handleCompleteChange={(e) => this.handleCompleteChange(e)}

          // handleInputChange={(e) => this.handleInputChange(e)}
        />
      </div>
    );
  }
}


export default TodosContentContainer;