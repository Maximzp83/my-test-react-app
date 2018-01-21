import React, { Component } from 'react';

import Header from './partials/Header';
import Footer from './partials/Footer';


const user = {name: "Maxim", lastName: "Mironov"};


class MessagesList extends Component {
	constructor(props) {
    	super(props);

    	this.deleteButtonClick = this.deleteButtonClick.bind(this);
  }

	deleteButtonClick(index) {
		this.props.deleteMessage(index);
	}
	
	render() {
		const listItems = this.props.messages.map((message, index) =>
		        <li key={'message-'+ index.toString()}>
		        	<button className="deleteButton"
		        					type="button"
		        					onClick={(e) => this.deleteButtonClick(index, e)}>X</button>
		        	<span>{ message }</span>
		        </li>
	      	)
		
		return (
			<ul className="messagesList">{listItems}</ul>
		)
	}
}


// ------------

class HomeContent extends Component {
    constructor(props) {
    	super(props);
    	this.state = {
    		user: this.props.user,
    		message: '',
    		savedMessages: []
    	};

    	this.handleInputChange = this.handleInputChange.bind(this);
    	this.saveButtonClick = this.saveButtonClick.bind(this);
    	this.deleteMessage = this.deleteMessage.bind(this);

    }


    handleInputChange(event) {
    	this.setState({message: event.target.value})
    }

    saveButtonClick() {
    	// let updatedList = this.state.savedMessages.concat(this.state.message);
    	// this.setState({savedMessages: updatedList});
    	this.setState(prevState => ({
				savedMessages: prevState.savedMessages.concat(this.state.message)
    	}));
			this.messageInput.value = '';
    }

    deleteMessage(messageIndex) {
    	// let updatedList = this.state.savedMessages.filter((message, index) => index != messageIndex );
			// this.setState({savedMessages: updatedList});  	

    	this.setState(prevState => ({
          savedMessages: prevState.savedMessages.filter((message, index) => index != messageIndex )
      }));
    }



    render() {

    	return (
    		<div className="contentWrapper">

	    		<div className="container">
	    			<h1>Hello from <i>{ this.state.user.name } { this.state.user.lastName }</i>!</h1>
		    		<hr/>
						
						<div className="inputBlock">
			    		<label htmlFor="message">You typed: <b>{this.state.message}</b></label>
			    		<input type="text" id="message" placeholder='input something...'
			    					 // value=""
			    					 ref={(input) => { this.messageInput = input; }}
			    					 onChange={this.handleInputChange}/>

			    		<button type="button" onClick={this.saveButtonClick}>save</button>
						</div>

						<MessagesList messages={this.state.savedMessages}
													deleteMessage={this.deleteMessage} />

	    		</div>
    		</div>
    		);
    }
}


class Home extends Component {
  render() {
    return (
      <div className="mainWrapper">
        <Header />
        <HomeContent user={user} />
        <Footer />
      </div>
    );
  }
}

export default Home;