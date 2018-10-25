import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import GlobalState from './components/GlobalState';
import App from './App';

ReactDOM.render(
	<GlobalState>
		<BrowserRouter>
			<Route path="/" component={App} />
		</BrowserRouter>
	</GlobalState>,
	document.getElementById('root')
);
