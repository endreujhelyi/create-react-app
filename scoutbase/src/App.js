import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Countries, Country, Main, Nav } from './components';
import './App.css';

function App() {
	return (
		<Router>
			<Nav />
			<Route exact path="/" component={Main}/>
			<Route exact path="/countries" component={Countries}/>
			<Route exact path="/countries/:code" component={Country}/>
		</Router>
	)
}

export default App;
