import React from 'react';

const TodosForm = ({
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
)



export default TodosForm;	   
