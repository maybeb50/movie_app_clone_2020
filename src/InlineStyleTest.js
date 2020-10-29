import React from 'react';

const box = {
	color: 'gree',
	fontSize: '23px'
};

const shadow = {
    background: 'orange',
	boxShadow: '1px 1px 1px 1px #ccd'
};

function InlineStyleTest() {
	return(
		<div style={Object.assign({}, box, shadow)}>
			<h1>App.js</h1>
		</div>
	);
}

export default InlineStyleTest;