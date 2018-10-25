import React, { Component } from 'react';

import Color from '../assets/Colors';
import { withGlobalContext } from './GlobalState';

import References from './References';
import Resources from './Resources';

class Content extends Component {
	render() {
		const style = {
			wrapper: {
				marginTop: '1em',
				width: '100%',
				height: '250px',
				overflowX: 'hidden',
				display: 'grid',
				gridTemplateColumns: '5vw auto 85vw auto 5vw',
				position: 'relative',
				elementsWrap: {
					overflowX: 'hidden',
					gridColumn: 3,
					width: '100%',
					borderRight: '5px solid ' + Color.light,
					borderLeft: '5px solid ' + Color.light,
					paddingTop: '25px'
				},
				leftArrowDiv: {
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'
				},
				rightArrowDiv: {
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					gridColumn: 5
				},
				arrow: {
					color: Color.light,
					background: 'transparent',
					border: 'none',
					fontSize: '1.5em',
					cursor: 'pointer'
				}
			}
		};

		if (this.props.form === undefined) {
			return <p>Please Search for a theme</p>;
		} else {
			return (
				<div>
					<References style={style} />
					<Resources style={style} />
				</div>
			);
		}
	}
}

export default withGlobalContext(Content);
