import React from 'react';

const TodosContent = ({
	// props,
	todos,
	inputValue,
	handleInputChange,
	handleSubmit,
}) => (
	<div className="container">
		<h1>Todos page</h1>
		<hr/>

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

		{<ul className="messagesList">
			{todos.length > 0 ? <h3>Todos List:</h3> : null}
	      {todos.length > 0 ? (
	      	
	        todos.map((todo, index) => (
	          <li key={todo.id}
		          	className={todo.complete ? "complete" : ""}>
							<input	type="checkbox"
								defaultChecked={todo.complete}
								// onChange={() => handleCompleteChange(todo.id)}
							/>
	            {todo.text}
	            <button className="deleteButton" type="button"
	            	// onClick={() => handleDelete(todo.id)}
	            >X</button>
	          </li>
	        ))
	      ) : <h3>No todos</h3>}
	    </ul>}

	</div>
)



export default TodosContent;	   
