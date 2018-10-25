import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faPinterest,
	faTwitter,
	faInstagram,
	faFacebookF
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import nordstrom from '../assets/img/nordstrom-logo.jpeg';
import gap from '../assets/img/gap-logo.jpg';
import kate from '../assets/img/kate-spade-logo.png';
import jcrew from '../assets/img/jcrew-logo.jpg';
import asos from '../assets/img/asos-logo.jpg';
import sephora from '../assets/img/sephora-logo.jpg';
import wishOne from '../assets/img/wishSlideOne.jpeg';
import wishTwo from '../assets/img/wishSlideTwo.jpeg';
import wishThree from '../assets/img/wishSlideThree.jpeg';
import wishFour from '../assets/img/wishSlideFour.jpeg';
import wishFive from '../assets/img/wishSlideFive.jpeg';
import wishSix from '../assets/img/wishSlideSix.jpg';
import wishSeven from '../assets/img/wishSlideSeven.jpeg';
import wishEight from '../assets/img/wishSlideEight.jpg';
import wishNine from '../assets/img/wishSlideNine.jpeg';

import '../assets/css/marketing.css';

const twitter = <FontAwesomeIcon icon={faTwitter} />;
const pinterest = <FontAwesomeIcon icon={faPinterest} />;
const facebook = <FontAwesomeIcon icon={faFacebookF} />;
const instagram = <FontAwesomeIcon icon={faInstagram} />;
const email = <FontAwesomeIcon icon={faEnvelope} />;
const leftArrow = <FontAwesomeIcon icon={faChevronLeft} />;
const rightArrow = <FontAwesomeIcon icon={faChevronRight} />;

const slideArray = [
	wishOne,
	wishTwo,
	wishThree,
	wishFour,
	wishFive,
	wishSix,
	wishSeven,
	wishEight,
	wishNine
];

export default class Marketing extends Component {
	constructor() {
		super();
		this.state = {
			image: 0,
			className: ''
		};

		this.handleClickRight = this.handleClickRight.bind(this);
		this.handleClickLeft = this.handleClickLeft.bind(this);
	}

	handleClickRight() {
		const endImage = slideArray.length;
		if (this.state.image + 1 != endImage) {
			this.setState(
				prevState => ({
					image: prevState.image + 1,
					className: (prevState.className = 'slideLeft')
				}),
				() => {
					clearTimeout(this.timeout);
					this.timeout = setTimeout(
						() =>
							this.setState({
								className: ''
							}),
						100
					);
				}
			);
		} else {
			this.setState(prevState => ({
				image: 0
			}));
		}
	}
	handleClickLeft() {
		const endImage = slideArray.length;
		if (this.state.image - 1 != -1) {
			this.setState(prevState => ({
				image: prevState.image - 1
			}));
		} else {
			this.setState(prevState => ({
				image: endImage - 1
			}));
		}
	}

	render() {
		const titleDiv = <div className="marketingTitle">{this.props.title}</div>;
		if (this.props.title === 'FOLLOW') {
			return (
				<div className="sectionWrapper">
					<h3>{titleDiv}</h3>
					<div className="socialMediaLinks">
						<button>{facebook}</button>
						<button>{instagram}</button>
						<button>{twitter}</button>
						<button>{pinterest}</button>
					</div>
				</div>
			);
		} else if (this.props.title === 'SUBSCRIBE') {
			return (
				<div className="sectionWrapper">
					<h3>{titleDiv}</h3>
					<div className="subscriptionMarketing">
						<p>Be the first to know...</p>
						<input type="text" placeholder="EMAIL ADDRESS" />
						<button>{email}</button>
					</div>
				</div>
			);
		} else if (this.props.title === 'WISHLIST') {
			return (
				<div className="sectionWrapper">
					<h3>{titleDiv}</h3>
					<div className="wishlistMarketing">
						<div className="wishSlideShow">
							<button onClick={this.handleClickLeft}>{leftArrow}</button>
							<div className="slideImages">
								<img
									className={this.state.className}
									src={slideArray[this.state.image]}
									alt=""
								/>
							</div>
							<button onClick={this.handleClickRight}>{rightArrow}</button>
						</div>
						<p>
							{this.state.image + 1} of {slideArray.length}
						</p>
					</div>
				</div>
			);
		} else if (this.props.title === 'FAVORITES') {
			return (
				<div className="sectionWrapper">
					<h3>{titleDiv}</h3>
					<div className="favoritesMarketing">
						<img src={nordstrom} alt="" />
						<img src={gap} alt="" />
						<img src={kate} alt="" />
						<img src={jcrew} alt="" />
						<img src={asos} alt="" />
						<img src={sephora} alt="" />
					</div>
				</div>
			);
		} else {
			return null;
		}
	}
}
