import React from 'react';
import { Switch, Route } from 'react-router-dom';


import Header from './components/partials/Header';
import Footer from './components/partials/Footer';

import HomeContentContainer from './components/home/HomeContentContainer';
import AboutUsContentContainer from './components/about_us/AboutUsContentContainer';
import TodosContentContainer from './components/todos/TodosContentContainer';

import './styles/index.css';


// import logo from './logo.svg';
// import './App.css';

const user = {name: "Maxim", lastName: "Mironov"};
// let currentPage = {
// 	home: true,
// 	about: false,
// 	todos: false,
// }

/*class App extends Component {
	render() {
		return (
				<div className="mainWrapper">
					<Header />
					<Switch>
						<Route exact path='/' render={()=><HomeContentContainer user={user}/>}/>
						<Route path='/about' component={AboutUsContentContainer}/>
						<Route path='/todos' component={TodosContentContainer}/>

					</Switch>
					<Footer />
				</div>
			);
	}
}

export default App;*/

export default function App() {
	return (
		<div className="mainWrapper">
			<Header />
			<Switch>
				<Route exact path='/' render={()=><HomeContentContainer user={user}/>}/>
				<Route path='/about' component={AboutUsContentContainer}/>
				<Route path='/todos' component={TodosContentContainer}/>

			</Switch>
			<Footer />
		</div>
	);
	
}

