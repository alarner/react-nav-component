import React from 'react';

export default React.createClass({
	getDefaultProps: function() {
		return {
			breakpoint: 480,
			styles: '',
			icon: <img style={{height: '3em'}} src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAACWAAAAfYCAMAAACdNRYZAAAAA3NCSVQICAjb4U/gAAAACXBIWXMA
AGsoAABrKAGR9AOLAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAABt0RVh0
VGl0bGUASGFtYnVyZ2VyIChNZW51KSBJY29uiySdswAAABR0RVh0QXV0aG9yAERhbmllbCBGb3ds
ZXInSwyjAAAAqXRFWHREZXNjcmlwdGlvbgBBIHNpbXBsZSBhbmQgYmFzaWMgaGFtYnVyZ2VyICht
ZW51KSBpY29uLiBJdCBvcmlnaW5hdGVzIGZyb20gWGVyb3ggIlN0YXIiIHdvcmtzdGF0aW9ucyBv
ZiB0aGUgMTk4MCdzIGJ1dCBpcyBub3cgcG9wdWxhciB0byBoaWRlL3Nob3cgbWVudXMgb24gbW9i
aWxlIGRldmljZXMuY1+gygAAABh0RVh0Q3JlYXRpb24gVGltZQAyMDE1LTA2LTI5+65uTQAAAFh0
RVh0Q29weXJpZ2h0AENDMCBQdWJsaWMgRG9tYWluIERlZGljYXRpb24gaHR0cDovL2NyZWF0aXZl
Y29tbW9ucy5vcmcvcHVibGljZG9tYWluL3plcm8vMS4wL8bjvfkAAAMAUExURQAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAALMw9IgAAAD/dFJOUwABAgMEBQYHCAkKCwwNDg8QERITFBUWFxgZGhsc
HR4fICEiIyQlJicoKSorLC0uLzAxMjM0NTY3ODk6Ozw9Pj9AQUJDREVGR0hJSktMTU5PUFFSU1RV
VldYWVpbXF1eX2BhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ent8fX5/gIGCg4SFhoeIiYqLjI2O
j5CRkpOUlZaXmJmam5ydnp+goaKjpKWmp6ipqqusra6vsLGys7S1tre4ubq7vL2+v8DBwsPExcbH
yMnKy8zNzs/Q0dLT1NXW19jZ2tvc3d7f4OHi4+Tl5ufo6err7O3u7/Dx8vP09fb3+Pn6+/z9/usI
2TUAADerSURBVBgZ7MEHwF51fSjg3/d9WWQYZsQEUIYYBAQBWYKIBmu9RKyCLViirTWMq1K1Gm21
pg6MUupNkZYoVswFxaBFBRWBKxQjoiIgy8gWWSEMAxlkvb9rb3vbWhfjnPc95/yf5wkAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGKixm2636wtm/MLhRwAATXHIjBkz9tltu802CtpiZNr+
r33biad/efGSB9YnANBgvYduuvyr//Sxdxx1wDNHB400aY8/fO9nv/OzdQkAtM6Gu6/43NyjXrBJ
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
AAC/4o6/nBI8aXsueCQBAP6LxxbNHAmekklv/E4CAPy7a966aVCBbU64KgEA8s75ewaV2f2jP00A
oGj3nbLfUFCtnedemQBAoe6YP2NUUIcd51y+PgGAwvR++P7dghpNnLngpwkAFGPZotnTgvrt+vav
PpQAQOc9esF79hoO+mV4t7d+aWkCAJ310Hl/sfeooO+mzpx73sMJAHTM2hsWzNp5OBiYUbseNe/r
dyYA0An3Xfi3r99jdNAEmxz4xnlf/NGqBABa6rEbv3zS7IOnBE0zNG3/177tf33x8lseSQCgFVbc
ccW589955AHPHAmabuy03V76mqOPnfPBkxcsWPCpRQBAY3x6wYIFH//wnONef8SM52+9UQAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
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
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AKBVRk2b9dfPn7fgfR9e/Llly5cv/84KAKAxrlq+fPlXv7D4o+9fcOILjzpwt6Gg2fZ48sve8fGL
f/irBABa4zc/+drid738qY8cDJplwiGvPP3CH25MAKC1Nl/35TNee8SUoAH2eN67L7xpewIAnTCy
6qLT5swM+mbykfOXrEoAoHPuvXLRsdOCXtvl2EUrhhMA6K5bl8x7ZNArU573DytHEgDovls+PXen
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
AAAA9Nl/AGw+fihndOWeAAAAAElFTkSuQmCC" />
		};
	},
	componentWillMount: function() {
		window.addEventListener('resize', this.updateWidth);
	},
	getInitialState: function() {
		return {
			linksVisible: false,
			width: window.innerWidth
		};
	},
	render: function() {
		if(this.state.width < parseInt(this.props.breakpoint)) {
			let links = null;
			if(this.state.linksVisible) {
				links = (
					<div>
						{this.props.children}
					</div>
				);
			}
			return (
				<div className="burger" onClick={this.toggleLinks}>
					<div className="iconDiv" style={this.props.styles.icon}>{this.props.icon}</div>
					{links}
				</div>
			);
		}
		return (
			<div>
				{this.props.children}
			</div>
		);
	},
	toggleLinks: function() {
		this.setState({
			linksVisible: !this.state.linksVisible
		});
	},
	updateWidth: function() {
		this.setState({
			width: window.innerWidth
		});
	}
});