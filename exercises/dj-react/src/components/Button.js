import React from 'react';

import '../assets/css/button.css';

export default ({ onClick, title }) => {
	return <button onClick={onClick}>{title}</button>;
};
