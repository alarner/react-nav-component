import './../styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Links from './app';

const nav = (
	<div className="outside">
		<span>My Logo</span>
		<Links breakpoint="480px"
			styles={{
				icon: {
					height: '8em',
					backgroundColor: 'red'
				}
			}}
		>
			<a href="#">Home</a>
			<a href="#">Blog</a>
			<a href="#">Projects</a>
		</Links>
	</div>
);

ReactDOM.render(nav, document.getElementById('app'));