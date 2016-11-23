// Notes:
	// Need to tell users to set body margin: 0 or find a way to put it into the component
	// Test everything in a CSS sheet then put it all back into the defaultProps
	// Create a className structure for everything in case a user wants to change more things
		// Make sure to provide good documentation for the entire structure
	// Give the user-added links a className when they go thru the cloneElement function?
	// className and props name should be the same (eg: navContainer, narrowLinks)
	// Do styles for the icon need to go somewhere other than in the defaultProp that creates the <img> tag?
	// WHen hit breakpoint, height of navbar changes very slightly
import React from 'react';
import icon from './icon';

export default React.createClass({
	getDefaultProps: function() {
		return {
			// All default styling goes here and will be overridden by
			// a user changing the defaults from the entry.js code
			breakpoint: 480,
			icon: <img className="toggleImg" style={{height: '4em', padding: '0.5em', float: 'right'}} src={icon} />,
			narrowLinks: {
				float: 'right',
				clear: 'both',
				textAlign: 'right'
			},
			narrowLink: {
				color: '#fff',
				textDecoration: 'none',
				display: 'block',
				fontSize: '1.3em',
				// margin: '0.3em 0.3em 0.3em 0'
			},
			wideLinks: {
				float: 'right',
				lineHeight: '5em'
				// paddingRight: '0.5em'
			},
			wideLink: {
				// margin: '2em',
				color: '#fff'
			}
		};
	},
	// This allows the dropdown menu to toggle on smaller screen sizes
	componentWillMount: function() {
		window.addEventListener('resize', this.updateWidth);
	},
	// This sets links on smaller screens initially to "off"
	// Also sets initial state of window width
	getInitialState: function() {
		return {
			linksVisible: false,
			width: window.innerWidth
		};
	},
	render: function() {
		// Console log shows exactly what it should, but if I use it in the cloneElement() function, I get an undefined error
		console.log(this.props.narrowLink);
		// Adds props to the individual link elements on small screens
		const childrenWithPropsNarrow = React.Children.map(this.props.children, (child) => React.cloneElement(child, { style: this.props.narrowLink, className: 'narrowLink' }));
		// Adds props to the individual link elements on larger screens
		const childrenWithPropsWide = React.Children.map(this.props.children, (child) => React.cloneElement(child, { style: this.props.wideLink, className: 'wideLink' }));
		// Tests screen width against breakpoint setting to show or
		// not show the dropdown menu
		if(this.state.width < parseInt(this.props.breakpoint)) {
			let links = null;
			if(this.state.linksVisible) {
				links = (
					<div className="narrowLinks" style={this.props.narrowLinks}>
						{childrenWithPropsNarrow}
					</div>
				);
			}
			// Returns the dropdown icon with dropdown link menu
			// for smaller (mobile) screens
			return (
				<div className="toggleContainer" onClick={this.toggleLinks}>
					<div className="toggleDiv">{this.props.icon}</div>
					{links}
				</div>
			);
		}
		// Returns the links on larger screens
		return (
			<div className="wideLinks" style={this.props.wideLinks}>
				{childrenWithPropsWide}
			</div>
		);
	},
	// Shows/hides links when click on dropdown icon
	toggleLinks: function() {
		this.setState({
			linksVisible: !this.state.linksVisible
		});
	},
	// Changes state of screen width to know when to show dropdown
	updateWidth: function() {
		this.setState({
			width: window.innerWidth
		});
	}
});