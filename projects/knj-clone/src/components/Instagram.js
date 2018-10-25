import React from 'react';

import '../assets/css/instagram.css';

const images = [
	'image1',
	'image2',
	'image3',
	'image4',
	'image5',
	'image6',
	'image7',
	'image8',
	'image9',
	'image10',
	'image11',
	'image12',
	'image13',
	'image14',
	'image15',
	'image16',
	'image17',
	'image18',
	'image19',
	'image20'
];

export default () => {
	const allImages = images.map(image => <p className="instaImage">{image}</p>);
	return (
		<div className="instaWrapper">
			<h1>K & J INSTAGRAM</h1>
			<div className="instaHeader">
				<img src="" alt="" className="profilePic" />
				<div className="instaInfo">
					<a href="http://www.instagram.com">
						<p className="instaInfo">@kandjdiaries</p>
						<p className="instaDescription">
							Blogger | Makeup Artist | Photographer | Creative Director :
							info@kandjdiaries.com jessicahinkson8 watch IG stories fro tutorials!
						</p>
					</a>
				</div>
			</div>
			<div className="instaBody">{allImages}</div>
		</div>
	);
};
