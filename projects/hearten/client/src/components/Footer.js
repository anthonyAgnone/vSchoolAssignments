import React, { Component } from 'react';
import axios from 'axios';
import Color from '../assets/Colors';
import PromiseHandler from './PromiseHandler';
import queryString from 'query-string';

export default class Footer extends Component {
	getSpotifyData() {
		let parsed = queryString.parse(window.location.search);
		let spotifyAT = 'Bearer ' + parsed.access_token;
		const api = 'https://api.spotify.com/v1/playlists/6dlwJYNRdkTfZMALZclyIx';

		return () =>
			axios
				.get(api, { headers: { Authorization: spotifyAT } })
				.then(response => response.data);
	}

	render() {
		const style = {
			footer: {
				position: 'fixed',
				width: '100vw',
				height: '9vh',
				bottom: 0,
				left: 0,
				color: Color.light
			},
			player: {
				height: '9vh',
				width: '150px',
				border: `3px solid ${Color.light}`
			}
		};
		return (
			<footer style={style.footer}>
				<iframe
					height="80"
					width="300"
					style={style.player}
					src="https://open.spotify.com/embed/playlist/6dlwJYNRdkTfZMALZclyIx"
					frameborder="0"
					allowtransparency="true"
					allow="encrypted-media"
				/>
			</footer>
		);
	}
}
