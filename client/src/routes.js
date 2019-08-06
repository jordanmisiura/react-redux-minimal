import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from './app';

const Routes = (props) => (
	<Router {...props}>
		<div>
			<Route exact path='/' component={App} />
		</div>
	</Router>
);

export default Routes;