import './../styles/main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Links from './app';

const nav = (
	<div
		// Place styling for container div here
	>
		<img
			src="http://www.fillmurray.com/50/50"
			// Place styling for img div here
		></img>
		<Links
			// Insert props for Links component here?
			// Insert styles for Links and/or a tags here?
		>
			<a href="#"></a>
			<a href="#"></a>
			<a href="#"></a>
		</Links>
	</div>
);

ReactDOM.render(nav, dodcument.getElementById('app'));

// Do I want to try and have one section of this code that stores
// the styling for EVERYTHING? It would make it easier for uers to
// customize their navbar
	// Could it even be an object outside of the nav const?