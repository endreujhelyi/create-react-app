import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from 'styled-components';

import { Countries, Country, Main, Nav } from './components';
import './App.css';


const Container = styled.div`
	padding: 2rem 1rem;
	min-width: 360px;
	max-width: 800px;
	margin: 0 auto;
`;

function App() {
	return (
		<Router>
			<Nav />
			<Container>
				<Route exact path="/" component={Main}/>
				<Route exact path="/countries" component={Countries}/>
				<Route exact path="/countries/:code" component={Country}/>
			</Container>
		</Router>
	)
}

export default App;
