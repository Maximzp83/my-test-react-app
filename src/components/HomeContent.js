import React from 'react';
import { Link } from 'react-router-dom';

const HomeContent = (props) => (
	<div className="container">
		<h1>Home page</h1>
		<hr/>

		<h2><i>{ props.user.name } { props.user.lastName }</i> test React App</h2>
		<hr/>

		<p>Home page content</p>

		<h4>Go to the <Link to='/todos'>Todos</Link> page</h4>

	</div>
)



export default HomeContent;	   
