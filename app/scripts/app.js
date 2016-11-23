import React from 'react';
import icon from './icon';

export default React.createClass({
	getDefaultProps: function() {
		return {
			// All default styling goes here and will be overridden by
			// a user changing the defaults from the entry.js code
			breakpoint: 480,
			icon: <img style={{height: '4em', padding: '0.5em', float: 'right'}} src={icon} />,
			narrowLinks: {
				float: 'right',
				clear: 'both'
			},
			narrowLink: {
				color: 'red'
			},
			wideLinks: {
				float: 'right',
				lineHeight: '5em',
				paddingRight: '0.5em'
			},
			wideLink: {
				margin: '2em'
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
		const childrenWithPropsNarrow = React.Children.map(this.props.children, function(child) {
			return React.cloneElement(child, { style: {color: 'red'} });
		});
		// Adds props to the individual link elements on larger screens
		const childrenWithPropsWide = React.Children.map(this.props.children, function(child) {
			return React.cloneElement(child, { style: {color: 'red'} });
		});
		// Tests screen width against breakpoint setting to show or
		// not show the dropdown menu
		if(this.state.width < parseInt(this.props.breakpoint)) {
			let links = null;
			if(this.state.linksVisible) {
				links = (
					<div style={this.props.narrowLinks}>
						{childrenWithPropsNarrow}
					</div>
				);
			}
			// Returns the dropdown icon with dropdown link menu
			// for smaller (mobile) screens
			return (
				<div onClick={this.toggleLinks}>
					<div>{this.props.icon}</div>
					{links}
				</div>
			);
		}
		// Returns the links on larger screens
		return (
			<div style={this.props.wideLinks}>
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