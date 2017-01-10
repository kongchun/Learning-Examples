 class CommentBox extends React.Component {
 	static propTypes = {
 		name: React.PropTypes.string, //校验作用
 	};

 	constructor(props) {
 		super(props);
 		this.state = {
 			data: []
 		};
 	}

 	componentDidMount() {
 		this.setState({
 			data: data
 		})
 	}

 	onHandleSubmit = (comment) => {
 		comment.id = Date.now();
 		this.state.data.push(comment);

 		this.setState({
 			data: data
 		})

 	}

 	render() {
 		return (
 			<div className="commentBox">
 				<CommentList data={this.state.data}/>
 				<CommentForm onHandleSubmit={this.onHandleSubmit}/>
 			</div>
 		);
 	}
 }

 class CommentList extends React.Component {
 	static propTypes = {
 		name: React.PropTypes.string,
 	};

 	constructor(props) {
 		super(props);
 	}

 	render() {
 		var commentNode = this.props.data.map(
 			comment => <Comment author={comment.author} key={comment.id}>{comment.text}</Comment>
 		)

 		return (
 			<div className="commentList">
 				{commentNode}
	        </div>
 		);
 	}
 }


 class CommentForm extends React.Component {
 	static propTypes = {
 		name: React.PropTypes.string,
 	};

 	constructor(props) {
 		super(props);
 		this.state = {
 			author: "",
 			text: ""
 		};
 	}



 	handleAuthorChange = (e) => {
 		this.setState({
 			author: e.target.value
 		});
 	}
 	handleTextChange = (e) => {
 		this.setState({
 			text: e.target.value
 		});
 	}

 	handleSubmit = (e) => {
 		e.preventDefault();
 		var data = this.state;
 		this.props.onHandleSubmit(data);

 	}


 	render() {
 		return (
 			<form className="commentForm" onSubmit={this.handleSubmit}>
				<input type="text" 
					placeholder="Your name" 
					value={this.state.author}  
					onChange={this.handleAuthorChange}
				/>
        		<input 
	        		type="text" 
	        		placeholder="Say something..." 
	        		value={this.state.text}    
	        		onChange={this.handleTextChange}
	        	/>
	
				<input type="submit" value="Post" /> 
			</form>

 		);
 	}
 }


 class Comment extends React.Component {
 	static propTypes = {
 		name: React.PropTypes.string,
 	};

 	constructor(props) {
 		super(props);
 	}

 	render() {
 		return (
 			<div className="comment">
		<h2 className="commentAuthor">
          		{this.props.author}
        	</h2> {
			this.props.children
		} </div>
 		);
 	}
 }


 var data = [{
 	id: 1,
 	author: "Pete Hunt",
 	text: "This is one comment"
 }, {
 	id: 2,
 	author: "Jordan Walke1",
 	text: "This is *another* comment"
 }];

 ReactDOM.render(
 	<CommentBox />,
 	document.getElementById('content')
 );