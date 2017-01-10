"use strict";

ReactDOM.render(React.createElement(
	"h1",
	null,
	"hello, world"
), document.getElementById("example"));

var HelloWorld = React.createClass({
	displayName: "HelloWorld",

	render: function render() {
		return React.createElement(
			"p",
			null,
			"Hello, ",
			React.createElement("input", { type: "text", placeholder: "Your name here" }),
			"! It is ",
			this.props.date.toTimeString()
		);
	}
});

setInterval(function () {
	ReactDOM.render(React.createElement(HelloWorld, { date: new Date() }), document.getElementById('example2'));
}, 500);

var HelloWorld2 = React.createClass({
	displayName: "HelloWorld2",

	getInitialState: function getInitialState() {
		return {
			a: "ok"
		};
	},
	render: function render() {
		return React.createElement(
			"p",
			null,
			"It is ",
			this.props.b,
			" ",
			this.state.a
		);
	}
});

var props = {};
props.a = 1;
props.b = 2;

var test = ReactDOM.render(React.createElement(HelloWorld2, props), document.getElementById('example3'));

setTimeout(function () {
	test.setState({
		a: "ok2"
	});
}, 2000);