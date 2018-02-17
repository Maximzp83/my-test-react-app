import React, { Component } from 'react';

import HomeContent from './HomeContent';

// ------------

class HomeContentContainer extends Component {
    constructor(props) {
    	super(props);
    	this.state = {
    		user: this.props.user,
    		message: '',
    		todos: [],
    		inputValue: '' 
    	};

    	this.handleInputChange = this.handleInputChange.bind(this);
    	// this.saveButtonClick = this.saveButtonClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    	this.handleDelete = this.handleDelete.bind(this);

    }


    handleInputChange(event) {
    	// this.setState({message: event.target.value})
        this.setState({
            inputValue: event.target.value
        })
    }

    saveButtonClick() {
    	// let updatedList = this.state.savedMessages.concat(this.state.message);
    	// this.setState({savedMessages: updatedList});
    	this.setState(prevState => ({
				savedMessages: prevState.savedMessages.concat(this.state.message)
    	}));
			this.messageInput.value = '';
    }

    handleSubmit(e) {

        e.preventDefault();

        if (!this.state.inputValue) {
          return;
        }

		const newItem = {
			text: this.state.inputValue,
			id: Date.now()
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



    render() {
    	return (
            <div className="contentWrapper">
                <HomeContent
                    user={this.state.user}
                    todos={this.state.todos}
                    inputValue={this.state.inputValue}
                    handleInputChange={this.handleInputChange}
                    handleSubmit={this.handleSubmit}
                    handleDelete={this.handleDelete}
                />
            </div>
        );
    }
}




export default HomeContentContainer;