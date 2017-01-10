"use strict";

// tutorial1.js
var CommentBox = React.createClass({
	displayName: "CommentBox",

	getInitialState: function getInitialState() {
		return {
			data: []
		};
	},
	componentDidMount: function componentDidMount() {
		this.setState({
			data: data
		});
	},
	handleCommentSubmit: function handleCommentSubmit(comment) {
		// TODO: submit to the server and refresh the list
		var comments = this.state.data;
		comment.id = Date.now();
		var newComments = comments.concat([comment]);
		this.setState({
			data: newComments
		});
	},
	render: function render() {
		return React.createElement(
			"div",
			{ className: "commentBox" },
			React.createElement(CommentList, { data: this.state.data }),
			React.createElement(CommentForm, { onCommentSubmit: this.handleCommentSubmit })
		);
	}
});

// tutorial2.js
var CommentList = React.createClass({
	displayName: "CommentList",

	render: function render() {
		var commentNodes = this.props.data.map(function (comment) {
			return React.createElement(
				Comment,
				{ author: comment.author, key: comment.id },
				comment.text
			);
		});
		return React.createElement(
			"div",
			{ className: "commentList" },
			commentNodes
		);
	}
});

var CommentForm = React.createClass({
	displayName: "CommentForm",

	getInitialState: function getInitialState() {
		return {
			author: '',
			text: ''
		};
	},
	handleAuthorChange: function handleAuthorChange(e) {
		this.setState({
			author: e.target.value
		});
	},
	handleTextChange: function handleTextChange(e) {
		this.setState({
			text: e.target.value
		});
	},
	handleSubmit: function handleSubmit(e) {
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
	render: function render() {
		return React.createElement(
			"form",
			{ className: "commentForm", onSubmit: this.handleSubmit },
			React.createElement("input", { type: "text", placeholder: "Your name", value: this.state.author, onChange: this.handleAuthorChange }),
			React.createElement("input", { type: "text", placeholder: "Say something...", value: this.state.text, onChange: this.handleTextChange }),
			React.createElement("input", { type: "submit", value: "Post" })
		);
	}
});

// tutorial4.js
var Comment = React.createClass({
	displayName: "Comment",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "comment" },
			React.createElement(
				"h2",
				{ className: "commentAuthor" },
				this.props.author
			),
			this.props.children
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

ReactDOM.render(React.createElement(CommentBox, null), document.getElementById('content'));