import React, { Component } from 'react';
import './maincomp.css';

//todo: testing only consts; remove later
const HOSTS = ['http://10.0.1.12:9888','http://172.16.140.203:9888','http://localhost:9888'];
const HOST = HOSTS[2];

class MainComp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			channels: []
		}
	}

	componentDidMount() {
		fetch(HOST+"/api/allchannels")
		.then(response => response.json())
		.then((jsonChannelData) => {
			let dataTest = [];
			console.info(jsonChannelData);
			if (jsonChannelData.channels !== null && jsonChannelData.channels.length > 0) {
				jsonChannelData.channels.forEach((channel) => {
					dataTest.push(channel.name);
				});
			}

			console.info("data test: ", dataTest);
			this.setState({
				channels: dataTest
			});
		});

		this.props.testMode(true);
	}

	render() { 
		return (
			<div className="apptitle">
				{this.state.channels.toString()}
			</div>); 
	} 	
}

export default MainComp;