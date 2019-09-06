import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Countries, Main } from './components';

import './App.css';

function App() {
	return (
		<Router>
			<Route exact path="/" component={Main}/>
			<Route exact path="/countries" component={Countries}/>
		</Router>
	)
}

export default App;
