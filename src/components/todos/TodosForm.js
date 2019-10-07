import React, { Component } from 'react';

/*const TodosForm = ({
	// props,
	inputValue,
	handleInputChange,
	handleSubmit,
}) => (
		<form className="inputBlock" onSubmit={handleSubmit}>
			<label htmlFor="message">You typed: <b>{inputValue}</b></label>
			<input type="text" placeholder='input something...'
				value={inputValue}
				// ref={(input) => { this.messageInput = input; }}
				// onChange={props.handleInputChange}/>
				// onChange={(e) => props.handleInputChange(e.target.value)} />
				onChange={ e => handleInputChange(e.target.value) } />

			<button type="submit">save</button>
		</form>
)*/

class TodosForm extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	    inputValue: '' 
	  };
	}

	/*componentWillUpdate() {
		console.log('componentWillUpdate')
	}
	componentDidUpdate() {
		console.log('componentDidUpdate')
	}*/

	handleInputChange = e => {
	  // console.log(value)
	  // this.setState({message: event.target.value})
	  // this.setState({ inputValue: value })
	  this.setState({ inputValue: e.target.value })
	  // console.log(this.state)
	}

	handleSubmit = e => {
	  // console.log(this.props)
	  e.preventDefault();
	  // console.log(addTodo)
	  if (!this.state.inputValue) return;

	  this.props.addTodo(this.state.inputValue);
	  this.setState({ inputValue: "" });
	}

	render() {
    // const { handleSubmit } = this.props;
    const { inputValue } = this.state;

		return (
			<form className="inputBlock" onSubmit={this.handleSubmit}>
				<label htmlFor="message">You typed: <b>{inputValue}</b></label>
				<input type="text" placeholder='input something...'
					value={inputValue}
					// ref={(input) => { this.messageInput = input; }}
					// onChange={props.handleInputChange}/>
					// onChange={(e) => props.handleInputChange(e.target.value)} />
					// onChange={ e => handleInputChange(e.target.value) } 
					onChange={ this.handleInputChange } />

				<button type="submit">save</button>
			</form>
		)
	}

}



export default TodosForm;	   
