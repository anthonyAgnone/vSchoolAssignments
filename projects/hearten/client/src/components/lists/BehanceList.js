import React from 'react';
import Colors from '../../assets/Colors';

import { Link, withRouter } from 'react-router-dom';

const BehanceList = ({ data }) => {
	const style = {
		wrapper: {
			minWidth: '300px',
			maxWidth: '300px',
			height: '200px',
			marginRight: '20px',
			backgroundColor: Colors.highlight,
			transition: 'all .3s ease',
			overflow: 'hidden',
			position: 'relative',
			header: {
				position: 'absolute',
				top: 0,
				left: 0,
				width: '300px',
				height: '200px',
				zIndex: 2
			},
			title: {
				height: '100%',
				width: '100%',
				textDecoration: 'none',
				margin: 0,
				padding: 0,
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'start',
				textAlign: 'center',
				color: Colors.light,
				fontSize: '180%',
				overflow: 'hidden',
				h1: {
					padding: 0,
					margin: 0
				}
			},
			body: {
				position: 'absolute',
				top: 0,
				left: 0,
				opacity: 0.15,
				transform: 'scale(0.4)',
				transformOrigin: '0 0',
				width: '800px',
				display: 'grid',
				gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
				gridAutoRows: 'minmax(100px, auto)',
				gridAutoFlow: 'dense'
			}
		}
	};

	const title = 'Behance';
	const splitTitle = title.split('');
	const spreadTitle = splitTitle.map((letter, i) => (
		<h1 key={i} style={style.wrapper.title.h1}>
			{letter}
		</h1>
	));

	const projectElements = data.map(project => (
		<div key={project.id} id={project.id}>
			<a href={project.url} target="_blank" rel="noopener noreferrer">
				<img src={project.covers[230]} alt="" />
			</a>
		</div>
	));

	return (
		<div className="reference-wrapper" style={style.wrapper}>
			<div className="reference-header" style={style.wrapper.header}>
				<Link style={style.wrapper.title} to={{ pathname: '/behance', state: { data } }}>
					{spreadTitle}
				</Link>
			</div>
			<div style={style.wrapper.body}>{projectElements}</div>
		</div>
	);
};

export default withRouter(BehanceList);
