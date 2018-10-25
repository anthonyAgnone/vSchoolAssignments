import React, { Component } from 'react';
import axios from 'axios';
import parser from 'rss-parser';

import PromiseHandler from './PromiseHandler';
import { withinView } from './View';
import { withGlobalContext } from './GlobalState';

import AwwwardsList from './lists/AwwwardsList';
import BehanceList from './lists/BehanceList';
import DeviantList from './lists/DeviantList';
import PinterestList from './lists/PinterestList';
import NectarList from './lists/NectarList';

import awwwards from '../assets/images/awwwards.png';
import cssNectar from '../assets/images/cssNectar.png';
import pinterest from '../assets/images/pinterest.png';
import siteInspire from '../assets/images/siteInspire.png';
import htmlUp from '../assets/images/htmlUp.png';
import RefDataLess from './RefDataLess';

const cors = 'https://vschool-cors.herokuapp.com/?url=';

class References extends Component {
	constructor(props) {
		super(props);

		this.state = {
			numberOfElements: 0,
			position: 0
		};

		this.handleLeft = this.handleLeft.bind(this);
		this.handleRight = this.handleRight.bind(this);
		this.getBehanceData = this.getBehanceData.bind(this);
		this.getAwardsData = this.getAwardsData.bind(this);
		this.getNectarData = this.getNectarData.bind(this);
		this.getDeviantData = this.getDeviantData.bind(this);
		this.getSiteInspireData = this.getSiteInspireData.bind(this);
		this.getHtmlUpData = this.getHtmlUpData.bind(this);
	}

	handleLeft() {
		this.setState(prevState => {
			if (prevState.position + 320 < 0 && prevState.position < 0) {
				return {
					position: prevState.position + 320
				};
			} else {
				return {
					position: 0
				};
			}
		});
	}

	handleRight() {
		const widthContainer = document.getElementById('reference-wrapper').offsetWidth;
		const widthElements = 0 - 320 * 7;
		const maxPosition = widthElements + widthContainer + 10;
		console.log(this.state.numberOfElements);
		console.log(this.state.position + ' current position');
		console.log(this.state.position - 340 + ' next position');
		console.log(this.state.position - 340 <= maxPosition);
		this.setState(prevState => {
			if (prevState.position - 340 <= maxPosition) {
				return {
					position: maxPosition
				};
			} else {
				return {
					position: prevState.position - 340
				};
			}
		});
	}

	componentDidMount() {
		const numElements = document.querySelectorAll('.reference-wrapper');
		this.setState(prevState => {
			return { numberOfElements: prevState + numElements.length };
		});

		// this.getRssData();
	}

	getBehanceData() {
		const api = 'Pps0p2tPVAJb7FKdc0NBBDIx1OYoJceQ';
		const url = 'https://api.behance.net/v2/projects?';

		const apiQuery = `${cors}${url}q=${this.props.form.searchTerm.replace(
			/\s/g,
			'+'
		)}&field=web+design&client_id=${api}`;

		return axios.get(apiQuery).then(response => response.data.projects);
	}

	getDeviantData() {
		const url =
			'https://www.deviantart.com/api/v1/oauth2/browse/popular?category_path=designs/web&q=';
		const searchTerm = this.props.form.searchTerm.replace(/\s/g, '+');
		const options = '&timerange=alltime&limit=20&';
		return axios
			.get(
				`${cors}https://www.deviantart.com/oauth2/token?grant_type=client_credentials&client_id=8737&client_secret=fcc076c216e150f84c6d2b8c2581dc27`
			)
			.then(response => response.data)
			.then(token => {
				return axios.get(
					`${cors}${url}${searchTerm}${options}access_token=${token.access_token}`
				);
			})
			.then(response => response.data.results);
	}

	getAwardsData() {
		const url = 'https://www.awwwards.com/inspiration/search?text=';
		const searchTerm = this.props.form.searchTerm.replace(/\s/g, '+');
		const searchData = {
			url: url + searchTerm,
			search: searchTerm,
			image: awwwards
		};
		return { searchData };
	}

	getNectarData() {
		const url = 'https://cssnectar.com/?s=';
		const searchTerm = this.props.form.searchTerm.replace(/\s/g, '+');
		const searchData = {
			url: url + searchTerm,
			search: searchTerm,
			image: cssNectar
		};
		return searchData;
	}

	getPinterestData() {
		const searchTerm = this.props.form.searchTerm.replace(/\s/g, '+');
		const url =
			'https://www.pinterest.com/search/pins/?q=web+design+' +
			searchTerm +
			'&rs=typed&term_meta[]=web|typed&term_meta[]=design|typed&term_meta[]=star|typed&term_meta[]=wars|typed';
		const searchData = {
			url: url,
			search: searchTerm,
			image: pinterest
		};

		return searchData;
	}

	getSiteInspireData() {
		const url = 'https://www.siteinspire.com/';
		const image = siteInspire;
		const title = 'Site Inspire';
		return { url, image, title };
	}

	getHtmlUpData() {
		const url = 'https://html5up.net/';
		const image = htmlUp;
		const title = 'Html 5 Up';
		return { url, image, title };
	}

	getRssData() {
		parser.parseURL('https://www.reddit.com/.rss', function(err, feed) {
			console.log(feed.title);
			feed.items.forEach(function(entry) {
				console.log(entry.title + ':' + entry.link);
			});
		});
	}

	render() {
		const { style } = this.props;
		const elementStyle = {
			elements: {
				display: 'flex',
				width: '100%',
				transform: `translateX(${this.state.position}px)`,
				transition: 'all 0.2s ease'
			}
		};
		return (
			<div className="wrapper" style={style.wrapper}>
				<div style={style.wrapper.leftArrowDiv}>
					<button style={style.wrapper.arrow} onClick={this.handleLeft}>
						{' '}
						&#9664;{' '}
					</button>
				</div>
				<div className="leftBracket" style={style.wrapper.leftBracket} />
				<div
					className="references-wrap"
					id="reference-wrapper"
					style={style.wrapper.elementsWrap}
				>
					<div id="references" className="references" style={elementStyle.elements}>
						<PromiseHandler promise={this.getBehanceData} render={withinView(BehanceList)} />
						<PromiseHandler promise={this.getDeviantData} render={withinView(DeviantList)} />
						<AwwwardsList data={this.getAwardsData()} />
						<PinterestList data={this.getPinterestData()} />
						<NectarList data={this.getNectarData()} />
						<RefDataLess data={this.getHtmlUpData()} />
						<RefDataLess data={this.getSiteInspireData()} />
					</div>
				</div>
				<div className="rightBracket" style={style.wrapper.rightBracket} />
				<div style={style.wrapper.rightArrowDiv}>
					<button style={style.wrapper.arrow} onClick={this.handleRight}>
						{' '}
						&#9658;{' '}
					</button>
				</div>
			</div>
		);
	}
}

export default withGlobalContext(References);
