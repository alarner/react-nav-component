import './../styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Links from './app';

const nav = (
	<div 
		className="outside"
		style={{
			overflow: 'hidden',
			backgroundColor: '#9FC1CE'
		}}
	>
		
			<img 
				src="http://www.fillmurray.com/50/50"
				style={{
					float: 'left',
					padding: '0.6em 1em',
					height: '3.9em'
					
				}}

			></img>
		
		<Links 
			breakpoint="480px"
			styles={{
				icon: {
					// height: '8em',
					// backgroundColor: 'red',
					padding: '1em',
					float: 'right'
				},
				links: {
					color: 'red',
					float: 'right',
					fontSize: '3em'
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