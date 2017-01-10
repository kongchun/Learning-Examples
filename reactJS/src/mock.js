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



class ProductTable extends React.Component {
	static propTypes = {
		name: React.PropTypes.string,
	};

	constructor(props) {
		super(props);
	}

	render() {
		var rows = [];
		var lastCategory = "";
		this.props.products.forEach(function(product) {
			if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
				return;
			}
			if (product.category !== lastCategory) {
				rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
			}
			rows.push(<ProductRow product={product} key={product.name} />);
			lastCategory = product.category;
		}.bind(this));

		return (
			<table>
				<thead>
		          <tr>
		            <th>Name</th>
		            <th>Price</th>
		          </tr>
		        </thead>
		        <tbody>
		        {rows}
		        </tbody>
			</table>
		);
	}
}


class ProductCategoryRow extends React.Component {
	static propTypes = {
		name: React.PropTypes.string,
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (<tr><th colSpan="2">{this.props.category}</th></tr>);
	}
}


class ProductRow extends React.Component {
	static propTypes = {
		name: React.PropTypes.string,
	};

	constructor(props) {
		super(props);
	}

	render() {
		var name = this.props.product.stocked ?
			this.props.product.name :
			<span style={{color:'red'}}>
				{this.props.product.name}
			</span>
		return (
			<tr>
			 <td>{name}</td>
        	 <td>{this.props.product.price}</td>
			</tr>
		);
	}
}



class FilterableProductTable extends React.Component {
	static propTypes = {
		name: React.PropTypes.string,
	};

	constructor(props) {
		super(props);
		this.state = {
			filterText: '',
			inStockOnly: false
		}
	}

	handleUserInput = (filterText, inStockOnly) => {
		this.setState({
			filterText: filterText,
			inStockOnly: inStockOnly
		})
	}

	render() {
		return (
			<div>
			<SearchBar filterText = {this.state.filterText} inStockOnly={this.state.inStockOnly} onhandleChange={this.handleUserInput}/> 
			<ProductTable  products={this.props.products} filterText = {this.state.filterText} inStockOnly={this.state.inStockOnly}/>
			</div>
		);
	}
}

class SearchBar extends React.Component {
	static propTypes = {
		name: React.PropTypes.string,
	};

	constructor(props) {
		super(props);
	}

	handleChange = (event) => {
		this.props.onhandleChange(
			this.refs.filterTextInput.value,
			this.refs.inStockOnlyInput.checked
		)
	}

	render() {
		return (
			<form>
		        <input type="text" placeholder="Search..." onChange={this.handleChange} ref="filterTextInput" value={this.props.filterText}/>
		        <p>
		          <input type="checkbox" onChange={this.handleChange} ref="inStockOnlyInput"  checked={this.props.inStockOnly}/>
		          {' '}
		          Only show products in stock
		        </p>
		      </form>
		);
	}
}



ReactDOM.render(
	<FilterableProductTable products={data}/>,
	document.getElementById("content")
);