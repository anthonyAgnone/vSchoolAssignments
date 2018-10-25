import React from 'react';
import { Route, Switch } from 'react-router-dom';

import GranimComponent from './components/GranimComponent';

import Header from './components/Header';
import Landing from './components/Landing';
import Content from './components/Content';
import Instructions from './components/Instructions';
import Footer from './components/Footer';

import PexelsRoute from './components/routes/PexelsRoute';
import PixaBayRoute from './components/routes/PixaBayRoute';
import DeviantRoute from './components/routes/DeviantRoute';
import BehanceRoute from './components/routes/BehanceRoute';

import 'bootstrap/dist/css/bootstrap-reboot.css';
import './components/routes/pixaBay.css';

import './assets/transition.css';

export default () => {
	const style = {
		appWrapper: {
			height: '100vh',
			width: '100vw',
			overflow: 'hidden'
		}
	};
	return (
		<div className="app-wrapper" style={style.appWrapper}>
			<GranimComponent />
			<Header />
			<Switch>
				<Route exact path="/" component={Landing} />
				<Route path="/inspire" component={Content} />
				<Route path="/instructions" component={Instructions} />
				<Route
					path="/pexels"
					render={({
						location: {
							state: { data }
						}
					}) => {
						return <PexelsRoute data={data} />;
					}}
				/>
				<Route
					path="/pixabay"
					render={({
						location: {
							state: { data }
						}
					}) => {
						return <PixaBayRoute data={data} />;
					}}
				/>
				<Route
					path="/deviant-art"
					render={({
						location: {
							state: { data }
						}
					}) => {
						return <DeviantRoute data={data} />;
					}}
				/>
				<Route
					path="/behance"
					render={({
						location: {
							state: { data }
						}
					}) => {
						return <BehanceRoute data={data} />;
					}}
				/>
			</Switch>
			<Footer />
		</div>
	);
};
