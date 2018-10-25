import React from 'react';
import Colors from '../../assets/Colors';

export default ({ data: { url, image, searchTerm } }) => {
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
				fontSize: '130%',
				paddingTop: '6%',
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
				transform: 'scale(0.5)',
				transformOrigin: '0 0',
				width: '900px',
				display: 'grid',
				gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
				gridAutoRows: 'minmax(120px, auto)',
				gridAutoFlow: 'dense',
				description: {
					fontSize: '1.2rem',
					color: Colors.light,
					width: '100%',
					position: 'absolute',
					top: 0,
					left: 0,
					paddingTop: '30%'
				}
			}
		}
	};
	const title = 'Adobe Color';
	const splitTitle = title.split('');
	const spreadTitle = splitTitle.map((letter, i) => (
		<h1 key={i} style={style.wrapper.title.h1}>
			{letter}
		</h1>
	));

	return (
		<div className="resource-wrapper" style={style.wrapper}>
			<div className="resource-header" style={style.wrapper.header}>
				<a style={style.wrapper.title} href={url} target="_blank" rel="noopener noreferrer">
					{spreadTitle}
				</a>
			</div>
			<div style={style.wrapper.body}>
				<img src={image} alt={title} />
			</div>
			<div style={style.wrapper.body.description} />
		</div>
	);
};
