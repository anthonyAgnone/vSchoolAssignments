import React from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import ArticleWrapper from './components/ArticleWrapper';
import Marketing from './components/Marketing';
import Instagram from './components/Instagram';

import './assets/css/normalize.css';
import './assets/css/app.css';

export default () => {
	return (
		<div className="pageWrap">
			<Nav />
			<Header />
			<ArticleWrapper />
			<div className="marketingWrapper">
				<Marketing title="FOLLOW" />
				<Marketing title="SUBSCRIBE" />
				<Marketing title="WISHLIST" />
				<Marketing title="FAVORITES" />
			</div>
			<Instagram />
		</div>
	);
};
