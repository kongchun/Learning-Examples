"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var data = [{
	category: "Sporting Goods",
	price: "$49.99",
	stocked: true,
	name: "Football"
}, {
	category: "Sporting Goods",
	price: "$9.99",
	stocked: true,
	name: "Baseball"
}, {
	category: "Sporting Goods",
	price: "$29.99",
	stocked: false,
	name: "Basketball"
}, {
	category: "Electronics",
	price: "$99.99",
	stocked: true,
	name: "iPod Touch"
}, {
	category: "Electronics",
	price: "$399.99",
	stocked: false,
	name: "iPhone 5"
}, {
	category: "Electronics",
	price: "$199.99",
	stocked: true,
	name: "Nexus 7"
}];

var ProductTable = function (_React$Component) {
	_inherits(ProductTable, _React$Component);

	function ProductTable(props) {
		_classCallCheck(this, ProductTable);

		return _possibleConstructorReturn(this, (ProductTable.__proto__ || Object.getPrototypeOf(ProductTable)).call(this, props));
	}

	_createClass(ProductTable, [{
		key: "render",
		value: function render() {
			var rows = [];
			var lastCategory = "";
			this.props.products.forEach(function (product) {
				if (product.name.indexOf(this.props.filterText) === -1 || !product.stocked && this.props.inStockOnly) {
					return;
				}
				if (product.category !== lastCategory) {
					rows.push(React.createElement(ProductCategoryRow, { category: product.category, key: product.category }));
				}
				rows.push(React.createElement(ProductRow, { product: product, key: product.name }));
				lastCategory = product.category;
			}.bind(this));

			return React.createElement(
				"table",
				null,
				React.createElement(
					"thead",
					null,
					React.createElement(
						"tr",
						null,
						React.createElement(
							"th",
							null,
							"Name"
						),
						React.createElement(
							"th",
							null,
							"Price"
						)
					)
				),
				React.createElement(
					"tbody",
					null,
					rows
				)
			);
		}
	}]);

	return ProductTable;
}(React.Component);

ProductTable.propTypes = {
	name: React.PropTypes.string
};

var ProductCategoryRow = function (_React$Component2) {
	_inherits(ProductCategoryRow, _React$Component2);

	function ProductCategoryRow(props) {
		_classCallCheck(this, ProductCategoryRow);

		return _possibleConstructorReturn(this, (ProductCategoryRow.__proto__ || Object.getPrototypeOf(ProductCategoryRow)).call(this, props));
	}

	_createClass(ProductCategoryRow, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"tr",
				null,
				React.createElement(
					"th",
					{ colSpan: "2" },
					this.props.category
				)
			);
		}
	}]);

	return ProductCategoryRow;
}(React.Component);

ProductCategoryRow.propTypes = {
	name: React.PropTypes.string
};

var ProductRow = function (_React$Component3) {
	_inherits(ProductRow, _React$Component3);

	function ProductRow(props) {
		_classCallCheck(this, ProductRow);

		return _possibleConstructorReturn(this, (ProductRow.__proto__ || Object.getPrototypeOf(ProductRow)).call(this, props));
	}

	_createClass(ProductRow, [{
		key: "render",
		value: function render() {
			var name = this.props.product.stocked ? this.props.product.name : React.createElement(
				"span",
				{ style: { color: 'red' } },
				this.props.product.name
			);
			return React.createElement(
				"tr",
				null,
				React.createElement(
					"td",
					null,
					name
				),
				React.createElement(
					"td",
					null,
					this.props.product.price
				)
			);
		}
	}]);

	return ProductRow;
}(React.Component);

ProductRow.propTypes = {
	name: React.PropTypes.string
};

var FilterableProductTable = function (_React$Component4) {
	_inherits(FilterableProductTable, _React$Component4);

	function FilterableProductTable(props) {
		_classCallCheck(this, FilterableProductTable);

		var _this4 = _possibleConstructorReturn(this, (FilterableProductTable.__proto__ || Object.getPrototypeOf(FilterableProductTable)).call(this, props));

		_this4.handleUserInput = function (filterText, inStockOnly) {
			_this4.setState({
				filterText: filterText,
				inStockOnly: inStockOnly
			});
		};

		_this4.state = {
			filterText: '',
			inStockOnly: false
		};
		return _this4;
	}

	_createClass(FilterableProductTable, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement(SearchBar, { filterText: this.state.filterText, inStockOnly: this.state.inStockOnly, onhandleChange: this.handleUserInput }),
				React.createElement(ProductTable, { products: this.props.products, filterText: this.state.filterText, inStockOnly: this.state.inStockOnly })
			);
		}
	}]);

	return FilterableProductTable;
}(React.Component);

FilterableProductTable.propTypes = {
	name: React.PropTypes.string
};

var SearchBar = function (_React$Component5) {
	_inherits(SearchBar, _React$Component5);

	function SearchBar(props) {
		_classCallCheck(this, SearchBar);

		var _this5 = _possibleConstructorReturn(this, (SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call(this, props));

		_this5.handleChange = function (event) {
			_this5.props.onhandleChange(_this5.refs.filterTextInput.value, _this5.refs.inStockOnlyInput.checked);
		};

		return _this5;
	}

	_createClass(SearchBar, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"form",
				null,
				React.createElement("input", { type: "text", placeholder: "Search...", onChange: this.handleChange, ref: "filterTextInput", value: this.props.filterText }),
				React.createElement(
					"p",
					null,
					React.createElement("input", { type: "checkbox", onChange: this.handleChange, ref: "inStockOnlyInput", checked: this.props.inStockOnly }),
					' ',
					"Only show products in stock"
				)
			);
		}
	}]);

	return SearchBar;
}(React.Component);

SearchBar.propTypes = {
	name: React.PropTypes.string
};


ReactDOM.render(React.createElement(FilterableProductTable, { products: data }), document.getElementById("content"));