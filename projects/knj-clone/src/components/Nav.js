import React from 'react';

import '../assets/css/nav.css';
import logo from '../assets/img/logo-h.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const search = <FontAwesomeIcon icon={faSearch} />;

export default () => {
	return (
		<div className="navWrap">
			<img src={logo} alt="" />
			<div className="navLinks">
				<a href="#">CATEGORIES</a>
				<a href="#">ABOUT</a>
				<a href="#">SHOP</a>
				<a href="#">CONTACT</a>
			</div>
			<div className="navSearch">
				<input type="text" placeholder="Search" />
				<button>{search}</button>
			</div>
		</div>
	);
};
