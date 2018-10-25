import React from 'react';
import Article from './Article';
import '../assets/css/article-wrapper.css';

import article1 from '../assets/img/article1.jpg';
import article2 from '../assets/img/article2.jpg';

const articleInfo = [
	{
		date: 'Sep 20, 2018',
		title: 'TESTING SKINCARE PRODUCTS: DRUNK ELEPHANT / DERMAE',
		category: 'Beauty',
		img: article1,
		imgDesc:
			'Derma E Anti-Wrinkle Cleanser/   Derma E Sun Defense Mineral Oil-Free Sunscreen   Drunk Elephant Protini Polypeptide Cream',
		body:
			"Happy Thursday everyone! It's been a minute since my last blog post and I wanted to share with you three new skincare proudcts I am testing right now: The Drunk Elephant Protini Polypeptide Cream, the Derma E Anti-Wrinkle [...]"
	},
	{
		date: 'Sep 04, 2018',
		title: 'OVARIAN CANCER AWARENESS MONTH - SHOP FOR A CAUSE',
		category: 'Beauty, Lifestyle',
		img: article2,
		imgDesc: '',
		body:
			'Another month has come and gone!  This month of September is extra important because it is Ovarian Cancer Awareness Month. Laura Mercier started the Laura Mercier Ovarian Cancer Fund in 2012 and they are dedicated in supporting those who are fighting this disease.  Did you know that 1 in 75 women will develop Ovarian Cancer […]'
	}
];

export default () => {
	const articleComponents = articleInfo.map((articleInfo, i) => (
		<Article key={i} {...articleInfo} />
	));
	return (
		<div className="articleWrapper">
			{articleComponents}
			<div className="pagination">Next</div>
		</div>
	);
};
