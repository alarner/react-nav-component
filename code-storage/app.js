import React from 'react';

export default React.createClass({
	getDefaultProps: function() {
		return {
			// Place all default props here to set default styling
			// if user doesn't want to edit their own
			breakpoint: 480
		};
	},
	// Needed to toggle hamburger menu on different screen sizes
	componentWillMount: function() {
		window.addEventListener('resize', this.updateWidth);
	},
	// Needed to set links on smaller screens initially to "off"
	// Needed to set initial state of window width
	getInitialState: function() {
		return {
			linksVisible: false,
			width: window.innerWidth
		};
	},
	render: function() {
		// Do I want to pass toggleLinks in from the parent?
		// Icon needs to be inserted before the links

		// Directly below is if statement setting up links in a
		// small screen where the hamburger appears
		if(this.state.width < parseInt(this.props.breakpoint)) {
			let links = null;
			if(this.state.linksVisible) {
				links = (
					<div>
						{this.props.children}
					</div>
				);
			}
			// This returns the links for a small screen
			return (
				<div>
					{links}
				</div>
			);
		}
		// This returns the links on a larger screen
		return (
			<div>
				{links}
			</div>
		);		
	},
	// Changes state of linksVisible when hamburger is clicked
	toggleLinks: function() {
		this.setState({
			linksVisible: !this.state.linksVisible
		});
	},
	// Changes width of screen to know when to show hamburger or not
	updateWidth: function() {
		this.setState({
			width: window.innerWidth
		});
	}
});