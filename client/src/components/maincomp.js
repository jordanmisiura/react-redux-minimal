import React, { Component } from 'react';
import './maincomp.css';

class MainComp extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.testMode(true);
		this.props.fetchData();
	}

	render() { 
		return (
			<div className="apptitle">
				{this.props.channels.toString()}
			</div>); 
	} 	
}

export default MainComp;