import React from 'react';
import HTMLParser from 'react-html-parser';

export default function QuotesList({ data }) {
	return (
		<div key={data[0].id} className="quote">
			{HTMLParser(data[0].content)}
			<p>-{data[0].title}</p>
		</div>
	);
}
