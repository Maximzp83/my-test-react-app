import React, { Component } from 'react';

import Header from './components/partials/Header';
import Footer from './components/partials/Footer';

import HomeContentContainer from './components/HomeContentContainer';
// import logo from './logo.svg';
// import './App.css';

const user = {name: "Maxim", lastName: "Mironov"};


class App extends Component {
	render() {
		return (
				<div className="mainWrapper">
					<Header />
					<HomeContentContainer user={user} />
					<Footer />
				</div>
			);
	}
}

export default App;
