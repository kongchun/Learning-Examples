"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
import {
	Router
} from 'react-router';
render(<Router/>, document.getElementById('app'));
*/

/*
import {
	Router,
	Route,
	hashHistory
} from 'react-router';
*/

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var Link = ReactRouter.Link;

var App = function (_React$Component) {
	_inherits(App, _React$Component);

	function App() {
		_classCallCheck(this, App);

		return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	}

	_createClass(App, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement(
					"h1",
					null,
					"App"
				),
				React.createElement(
					"ul",
					null,
					React.createElement(
						"li",
						null,
						React.createElement(
							Link,
							{ to: "/about" },
							"About"
						)
					),
					React.createElement(
						"li",
						null,
						React.createElement(
							Link,
							{ to: "/inbox" },
							"Inbox"
						)
					)
				),
				this.props.children
			);
		}
	}]);

	return App;
}(React.Component);

var About = function (_React$Component2) {
	_inherits(About, _React$Component2);

	function About() {
		_classCallCheck(this, About);

		return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).apply(this, arguments));
	}

	_createClass(About, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				"About"
			);
		}
	}]);

	return About;
}(React.Component);

var Inbox = function (_React$Component3) {
	_inherits(Inbox, _React$Component3);

	function Inbox() {
		_classCallCheck(this, Inbox);

		return _possibleConstructorReturn(this, (Inbox.__proto__ || Object.getPrototypeOf(Inbox)).apply(this, arguments));
	}

	_createClass(Inbox, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				"Inbox"
			);
		}
	}]);

	return Inbox;
}(React.Component);

ReactDOM.render(React.createElement(
	Router,
	{ history: hashHistory },
	React.createElement(
		Route,
		{ path: "/", component: App },
		React.createElement(Route, { path: "about", component: About }),
		React.createElement(Route, { path: "inbox", component: Inbox })
	)
), document.getElementById('app'));