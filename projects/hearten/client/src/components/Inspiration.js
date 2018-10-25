import React from 'react';
import Colors from '../assets/Colors';

export default function Inspiration({ title, searchTerm }) {
	const style = {
		wrapper: {
			minWidth: '300px',
			height: '200px',
			marginRight: '20px',
			backgroundColor: Colors.highlight,
			transition: 'all .3s ease',
			title: {
				height: '60px',
				margin: 0,
				padding: 0,
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				textAlign: 'center',
				color: Colors.light,
				fontSize: '80%',
				overflow: 'hidden',
				h1: {
					padding: 0,
					margin: 0
				}
			}
		}
	};
	const splitTitle = title.split('');
	const spreadTitle = splitTitle.map((letter, i) => (
		<h1 key={i} style={style.wrapper.title.h1}>
			{letter}
		</h1>
	));
	return (
		<div className="inspiration-wrapper" style={style.wrapper}>
			<div className="inspirations-header" style={style.wrapper.title}>
				{spreadTitle}
			</div>
			<div>{searchTerm}</div>
		</div>
	);
}
