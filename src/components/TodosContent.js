import React from 'react';

const TodosContent = (props) => (
	<div className="container">
		<h1>Todos page</h1>
		<hr/>

		<form className="inputBlock" onSubmit={(e) => props.handleSubmit(e)}>
			<label htmlFor="message">You typed: <b>{props.inputValue}</b></label>
			<input type="text" id="message" placeholder='input something...'
				value={props.inputValue}
				// ref={(input) => { this.messageInput = input; }}
				// onChange={props.handleInputChange}/>
				onChange={(e) => props.handleInputChange(e)} />

			<button type="submit">save</button>
		</form>

		<ul className="messagesList">
			{props.todos.length > 0 ? <h3>Todos List:</h3> : null}
	      {props.todos.length > 0 ? (
	      	
	        props.todos.map((todo, index) => (
	          <li key={todo.id}
		          	className={todo.complete ? "complete" : ""}>
							<input	type="checkbox"
								defaultChecked={todo.complete}
								onChange={() => props.handleCompleteChange(todo.id)}
							/>
	            {todo.text}
	            <button className="deleteButton" type="button"
	            	onClick={() => props.handleDelete(todo.id)}
	            >X</button>
	          </li>
	        ))
	      ) : <h3>No todos</h3>}
	    </ul>

	</div>
)



export default TodosContent;	   
