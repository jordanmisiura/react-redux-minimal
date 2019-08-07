import React, { Component } from 'react';
import './app.css';

import MainComp from './components/maincompcontainer';

class App extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		console.info("app component mounted");
	}

	render() { 
		return (
			<div>
				<MainComp />
			</div>
		); 
	} 	
}

export default App;