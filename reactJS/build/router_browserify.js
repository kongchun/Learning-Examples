'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               import {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	Router
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               } from 'react-router';
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               render(<Router/>, document.getElementById('app'));
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var App = function (_React$Component) {
	_inherits(App, _React$Component);

	function App() {
		_classCallCheck(this, App);

		return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	}

	_createClass(App, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'h1',
					null,
					'App'
				),
				_react2.default.createElement(
					'ul',
					null,
					_react2.default.createElement(
						'li',
						null,
						_react2.default.createElement(
							_reactRouter.Link,
							{ to: '/about' },
							'About'
						)
					),
					_react2.default.createElement(
						'li',
						null,
						_react2.default.createElement(
							_reactRouter.Link,
							{ to: '/inbox' },
							'Inbox'
						)
					)
				),
				this.props.children
			);
		}
	}]);

	return App;
}(_react2.default.Component);

var About = function (_React$Component2) {
	_inherits(About, _React$Component2);

	function About() {
		_classCallCheck(this, About);

		return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).apply(this, arguments));
	}

	_createClass(About, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				'About'
			);
		}
	}]);

	return About;
}(_react2.default.Component);

var Inbox = function (_React$Component3) {
	_inherits(Inbox, _React$Component3);

	function Inbox() {
		_classCallCheck(this, Inbox);

		return _possibleConstructorReturn(this, (Inbox.__proto__ || Object.getPrototypeOf(Inbox)).apply(this, arguments));
	}

	_createClass(Inbox, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				'Inbox'
			);
		}
	}]);

	return Inbox;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(
	_reactRouter.Router,
	{ history: _reactRouter.hashHistory },
	_react2.default.createElement(
		_reactRouter.Route,
		{ path: '/', component: App },
		_react2.default.createElement(_reactRouter.Route, { path: 'about', component: About }),
		_react2.default.createElement(_reactRouter.Route, { path: 'inbox', component: Inbox })
	)
), document.getElementById('app'));