import React, { Component } from 'react';
import axios from 'axios';

import PromiseHandler from './PromiseHandler';
import { withinView } from './View';

import Color from '../assets/Colors';
import test from '../assets/images/test2.png';

import './routes/pixaBay.css';
import QuotesList from './QuotesList';

export default class Landing extends Component {
	getQuoteData() {
		const url =
			'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1';
		return axios.get(url).then(response => response.data);
	}
	render() {
		const col = `calc((85vw - (12 * 3px)) / 12)`;
		const style = {
			landingWrap: {
				width: '85vw',
				height: `${85 * 0.48}vw`,
				margin: '5vh auto 0 auto',
				display: 'grid',
				gridTemplateColumns: `minmax(10px, 20px) repeat(12, minmax(auto, ${col})) minmax(10px, 20px)`,
				gridAutoRows: `min-content`,
				gridTemplateRows: 'auto',
				border: `5px solid ${Color.light}`,
				leftSide: {
					height: '100%',
					gridColumn: '2 / span 7',
					gridRow: 1,
					display: 'flex',
					justifyContent: 'start',
					alignItems: 'center',
					h1: {
						color: Color.light,
						fontSize: '4.8em',
						lineHeight: 1.6,
						paddingBottom: '25px',
						paddingLeft: '30px'
					}
				},
				img: {
					position: 'absolute',
					bottom: 0,
					right: 0,
					zIndex: 10,
					width: '40vw',
					height: 'auto'
				}
			}
		};
		return (
			<div style={style.landingWrap} className="landing-wrap">
				<div className="leftSide" style={style.landingWrap.leftSide}>
					<h1 style={style.landingWrap.leftSide.h1}>Lift your design to the next level</h1>
				</div>
				<PromiseHandler promise={this.getQuoteData} render={withinView(QuotesList)} />
				<img className="landing-img" style={style.landingWrap.img} src={test} alt="" />
			</div>
		);
	}
}
