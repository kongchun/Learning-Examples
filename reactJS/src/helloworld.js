ReactDOM.render(
	<h1>hello, world</h1>,
	document.getElementById("example")
);

var HelloWorld = React.createClass({
	render: function() {
		return (
			<p>
        Hello, <input type="text" placeholder="Your name here" />!
        It is {this.props.date.toTimeString()}
      </p>
		);
	}
});

setInterval(function() {
	ReactDOM.render(
		<HelloWorld date={new Date()} />,
		document.getElementById('example2')
	);
}, 500);


var HelloWorld2 = React.createClass({
	getInitialState: function() {
		return {
			a: "ok"
		};
	},
	render: function() {
		return (
			<p>
       			 It is {this.props.b} {this.state.a}
     		</p>
		);
	}
});


var props = {}
props.a = 1;
props.b = 2;

var test = ReactDOM.render(
	<HelloWorld2 {...props} />,
	document.getElementById('example3')
);

setTimeout(() => {
	test.setState({
		a: "ok2"
	})
}, 2000)