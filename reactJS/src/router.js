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

class App extends React.Component {
	render() {
		return (
			<div>
		        <h1>App</h1>
		        <ul>
		          <li><Link to="/about">About</Link></li>
		          <li><Link to="/inbox">Inbox</Link></li>
		        </ul>
		        {this.props.children}
	      </div>
		);
	}
}

class About extends React.Component {
	render() {
		return (
			<div >
       			 About 
      		</div>
		);
	}
}

class Inbox extends React.Component {
	render() {
		return (
			<div >
       			 Inbox 
      		</div>
		);
	}
}



ReactDOM.render((
	<Router history={hashHistory}>
    <Route path="/" component={App}>
   		 <Route path="about" component={About} />
      	 <Route path="inbox" component={Inbox} />
    </Route>
  </Router>
), document.getElementById('app'));