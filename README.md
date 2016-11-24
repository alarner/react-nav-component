#Reusable React Navbar Component

This navbar is built with React. It utilizes React's ```getDefaultProps``` to set initial styling which can be overridden by a user, either by using a styling variable or by using the built-in class name structure below.

```css
.navContainer {
	.logo {}
	.toggleContainer {
		.toggleDiv{
			.toggleImg {}
		}
		.narrowChildren{
			.narrowChild{}
		}
		.wideChildren{
			.wideChild{}
		}
	}
}
```

A user should also set the ```body``` to ```margin: 0```

The default style naming convention is the same as the class name structure.

The logo on the left can be turned off by adding a ```display: none```

###Dependencies

* React
* ReactDOM
