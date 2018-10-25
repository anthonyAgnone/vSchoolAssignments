import React from 'react';
import { Link } from 'react-router-dom';
import { withGlobalContext } from './GlobalState';
import Form from './Form';
import logo2 from '../assets/images/logo2.png';
import Colors from '../assets/Colors';

function Header({ handleChangeState }) {
	const style = {
		header: {
			position: 'absolute',
			top: 0,
			left: 0,
			height: '15vh',
			width: '100vw',
			padding: '5px',
			callToAction: {
				width: '60vw',
				display: 'flex',
				justifyContent: 'flex-end'
			},
			instructions: {
				color: Colors.light,
				fontSize: '1.6em',
				marginRight: '1.8em'
			},
			elements: {
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'end',
				height: '100%',
				width: '100%',
				brand: {
					height: '98%',
					width: 'auto',
					marginLeft: '5px',
					marginRight: '5px',
					img: {
						width: 'auto',
						height: '98%'
					}
				}
			}
		}
	};
	return (
		<div style={style.header} className="header-wrapper">
			<div style={style.header.elements} className="header-elements">
				<Link
					onClick={handleChangeState('default-state')}
					style={style.header.elements.brand}
					to="/"
				>
					<img style={style.header.elements.brand.img} src={logo2} alt="Hearten Design" />
				</Link>
				<div style={style.header.callToAction}>
					<Link
						to="/instructions"
						onClick={handleChangeState('third-gradient')}
						style={style.header.instructions}
					>
						How to use this site
					</Link>
					<Form />
				</div>
			</div>
		</div>
	);
}
export default withGlobalContext(Header);
