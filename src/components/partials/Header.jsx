import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

function Header(props)  {
  
    return (
      <header className="header">

        <div className="container">
        	<h1>Test React App</h1>
        	<nav>
	        	<ul>
		        	<li>
		        		<NavLink exact className="" to='/' >Home</NavLink>
	        		</li>
		        	<li>
		        		<NavLink to='/about'>About us</NavLink>
	        		</li>
		        	<li>
		        		<NavLink to='/todos'>Todos</NavLink>
	        		</li>
	        	</ul>
        	</nav>
        </div>
      </header>
    );
  
}

export default Header;