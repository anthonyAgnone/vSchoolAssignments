import React, { Component } from 'react';
import Masonry from 'react-masonry-css';
import Color from '../../assets/Colors';

const breakpointColumnsObj = {
	default: 4,
	1100: 3,
	700: 2,
	500: 1
};

export default class PixaBayRoute extends Component {
	render() {
		const style = {
			wrapper: {
				display: 'grid',
				gridTemplateColumns: '20px 1fr 20px',
				gridTemplateRows: '7vh 80vh',
				title: {
					color: Color.light,
					gridColumn: 2,
					gridRow: 1
				},
				mason: {
					gridColumn: 2,
					gridRow: 2,
					overflowY: 'scroll'
				},
				img: {
					maxWidth: '320px',
					height: 'auto',
					padding: '5px'
				}
			}
		};
		const projectElements = this.props.data.map(project => (
			<div className="project-wrapper" id={project.id}>
				<a href={project.pageURL} target="_blank" rel="noopener noreferrer">
					<img style={style.wrapper.img} src={project.webformatURL} alt="" />
				</a>
			</div>
		));
		return (
			<div style={style.wrapper}>
				<h1 style={style.wrapper.title}>PixaBay Stock Photos</h1>

				<Masonry
					breakpointCols={breakpointColumnsObj}
					className="my-masonry-grid"
					columnClassName="my-masonry-grid_column"
					style={style.wrapper.mason}
				>
					{projectElements}
				</Masonry>
			</div>
		);
	}
}
