import React from 'react';
import Colors from '../assets/Colors';

export default function Instructions() {
	const col = `calc((85vw - (12 * 3px)) / 12)`;
	const style = {
		instructionsWrap: {
			width: '85vw',
			height: `37vw`,
			margin: '5vh auto 0 auto',
			display: 'grid',
			gridTemplateColumns: `minmax(10px, 20px) repeat(12, minmax(auto, ${col})) minmax(10px, 20px)`,
			gridAutoRows: `min-content`,
			gridTemplateRows: 'auto',
			border: `5px solid ${Colors.light}`,
			leftSide: {
				height: '100%',
				gridColumn: '2 / span 7',
				gridRow: 1,
				display: 'flex',
				justifyContent: 'start',
				alignItems: 'center',
				h1: {
					fontSize: '4.8em',
					color: Colors.light,
					lineHeight: 1.6,
					paddingBottom: '85px',
					paddingLeft: '30px'
				}
			},
			rightSide: {
				height: '100%',
				gridColumn: '9 / span 5',
				gridRow: 1,
				paddingTop: '4em',
				p: {
					lineHeight: '1.3',
					color: Colors.light,
					fontSize: '1.3em'
				}
			}
		}
	};
	return (
		<div className="instructions-wrap" style={style.instructionsWrap}>
			<div style={style.instructionsWrap.leftSide} className="left-side">
				<h1 style={style.instructionsWrap.leftSide.h1}>How to use this App</h1>
			</div>
			<div className="right-side" style={style.instructionsWrap.rightSide}>
				<p style={style.instructionsWrap.rightSide.p}>
					This app was designed with all of us in mind. Starting a project from scratch can
					often be daunting and overwhelming. However, with the plethora of information on the
					web, we can make this process a bit less frustrating and certainly more productive.
				</p>
				<p style={style.instructionsWrap.rightSide.p}>
					{' '}
					In the search bar above, type in a theme your project could be based around. This
					could be a generic theme such as "ocean" or something more specific like "Buffy
					vampire slayer". The search engine will then reach out across the web to some
					curated reference sources and bring back inspiration to you. We have also include
					resources that may match your projects such as color themes, stock photos, icons,
					fonts, and other tools to make your design as polished and ambitious as you'd like
					it to be.
				</p>
				<p style={style.instructionsWrap.rightSide.p}>
					Lift your designs to the next level with Hearten Design.
				</p>
			</div>
		</div>
	);
}
