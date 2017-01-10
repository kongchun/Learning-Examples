// tutorial1.js
var CommentBox = React.createClass({
	getInitialState: function() {
		return {
			data: []
		};
	},
	componentDidMount: function() {
		this.setState({
			data: data
		});
	},
	handleCommentSubmit: function(comment) {
		// TODO: submit to the server and refresh the list
		var comments = this.state.data;
		comment.id = Date.now();
		var newComments = comments.concat([comment]);
		this.setState({
			data: newComments
		});
	},
	render: function() {
		return (
			<div className="commentBox">
        	<CommentList data={this.state.data}/>
       		<CommentForm onCommentSubmit={this.handleCommentSubmit} />
      		</div>
		);
	}
});

// tutorial2.js
var CommentList = React.createClass({
	render: function() {
		var commentNodes = this.props.data.map(function(comment) {
			return (
				<Comment author={comment.author} key={comment.id}>
	          {comment.text}
	        </Comment>
			);
		});
		return (
			<div className="commentList">
	        {commentNodes}
	      </div>
		);
	}
});

var CommentForm = React.createClass({
	getInitialState: function() {
		return {
			author: '',
			text: ''
		};
	},
	handleAuthorChange: function(e) {
		this.setState({
			author: e.target.value
		});
	},
	handleTextChange: function(e) {
		this.setState({
			text: e.target.value
		});
	},
	handleSubmit: function(e) {
		e.preventDefault();
		var author = this.state.author.trim();
		var text = this.state.text.trim();
		if (!text || !author) {
			return;
		}

		// TODO: send request to the server
		this.props.onCommentSubmit({
			author: author,
			text: text
		});
		this.setState({
			author: '',
			text: ''
		});
	},
	render: function() {
		return (

			<form className="commentForm" onSubmit={this.handleSubmit}>
				<input type="text" placeholder="Your name" value={this.state.author}  onChange={this.handleAuthorChange}/>
        		<input type="text" placeholder="Say something..." value={this.state.text}    onChange={this.handleTextChange}/>
	
				<input type="submit" value="Post" /> 
			</form>
		);
	}
});

// tutorial4.js
var Comment = React.createClass({
	render: function() {
		return (
			<div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        {this.props.children}
      </div>
		);
	}
});

// tutorial8.js
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