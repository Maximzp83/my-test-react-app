import React from 'react';

const TodosList = ({
	// props,
	todos,
	handleCompleteChange,
	handleDelete
}) => (
		<ul className="messagesList">
			{todos.length > 0 ? <h3>Todos List:</h3> : null}
	    
	    {todos.length ? (
        todos.map((todo, index) => (
          <li key={todo.id}	className={todo.complete ? "complete" : ""}>
						<input	type="checkbox"
							defaultChecked={todo.complete}
							onChange={() => handleCompleteChange(todo.id)}
						/>
            {todo.text}
            <button className="deleteButton" type="button"
            	onClick={() => handleDelete(todo.id)}
            >X</button>
          </li>
        ))
      ) : <h3>No todos</h3>}
	  </ul>
)



export default TodosList;	   
