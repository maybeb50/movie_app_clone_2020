import React, { useState } from 'react';

const box = {
	color: 'green',
	fontSize: '23px'
};

const shadow = {
    background: 'orange',
	boxShadow: '1px 1px 1px 1px #ccd'
};

function InlineStyleTest() {
	const [number, setTest] = useState(() => {
		return console.log('실행')
	});

	const onClickEvent = () => {
		setTest(number + 1);
	}
	
	return(
		<div style={{...box, ...shadow}}>
			<h1 onClick={onClickEvent}>App.js</h1>
		</div>
	);
}

export default InlineStyleTest;