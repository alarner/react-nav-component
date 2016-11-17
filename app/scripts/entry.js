import './../styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Links from './app';

const navStyles = {
	container: {
		overflow: 'hidden',
		backgroundColor: '#9FC1CE'
	},
	logoSrc: 'http://www.fillmurray.com/50/50',
	logo: {
		float: 'left',
		padding: '0.5em',
		height: '4em'
	},
	breakpoint: '480px'
};

const nav = (
	<div 
		style={navStyles.container}>
		<img 
			src={navStyles.logoSrc}
			style={navStyles.logo}></img>
		<Links 
			breakpoint={navStyles.breakpoint}
		>
			<a href="#">Home</a>
			<a href="#">Blog</a>
			<a href="#">Projects</a>
		</Links>
	</div>
);

ReactDOM.render(nav, document.getElementById('app'));

