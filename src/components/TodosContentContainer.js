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

        console.log(this.props.location.pathname)

        // this.handleInputChange = this.handleInputChange.bind(this);
        // this.saveButtonClick = this.saveButtonClick.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleDelete = this.handleDelete.bind(this);
        // this.handleDelete = this.handleDelete.bind(this);

    }

    handleInputChange(event) {
        // this.setState({message: event.target.value})
        this.setState({
            inputValue: event.target.value
        })
    }

   //  saveButtonClick() {
   //   // let updatedList = this.state.savedMessages.concat(this.state.message);
   //   // this.setState({savedMessages: updatedList});
   //   this.setState(prevState => ({
            //  savedMessages: prevState.savedMessages.concat(this.state.message)
   //   }));
            // this.messageInput.value = '';
   //  }

    handleSubmit(e) {

        e.preventDefault();

        if (!this.state.inputValue) {
          return;
        }

        const newItem = {
            text: this.state.inputValue,
            id: Date.now(),
            complete: false,
        }

        this.setState(prevState => ({
            todos: [...prevState.todos, newItem],
            inputValue: '' 
        }));
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
        return (
            <div className="contentWrapper">
                <TodosContent
                    todos={this.state.todos}
                    inputValue={this.state.inputValue}
                    handleInputChange={(e) => this.handleInputChange(e)}
                    handleSubmit={(e) => this.handleSubmit(e)}
                    handleDelete={(e) => this.handleDelete(e)}
                    handleCompleteChange={(e) => this.handleCompleteChange(e)}

                />
            </div>
        );
    }
}



export default TodosContentContainer;