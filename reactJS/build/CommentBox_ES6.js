"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommentBox = function (_React$Component) {
  _inherits(CommentBox, _React$Component);

  function CommentBox(props) {
    _classCallCheck(this, CommentBox);

    var _this = _possibleConstructorReturn(this, (CommentBox.__proto__ || Object.getPrototypeOf(CommentBox)).call(this, props));

    _this.onHandleSubmit = function (comment) {
      comment.id = Date.now();
      _this.state.data.push(comment);

      _this.setState({
        data: data
      });
    };

    _this.state = {
      data: []
    };
    return _this;
  }

  _createClass(CommentBox, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        data: data
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "commentBox" },
        React.createElement(CommentList, { data: this.state.data }),
        React.createElement(CommentForm, { onHandleSubmit: this.onHandleSubmit })
      );
    }
  }]);

  return CommentBox;
}(React.Component);

CommentBox.propTypes = {
  name: React.PropTypes.string };

var CommentList = function (_React$Component2) {
  _inherits(CommentList, _React$Component2);

  function CommentList(props) {
    _classCallCheck(this, CommentList);

    return _possibleConstructorReturn(this, (CommentList.__proto__ || Object.getPrototypeOf(CommentList)).call(this, props));
  }

  _createClass(CommentList, [{
    key: "render",
    value: function render() {
      var commentNode = this.props.data.map(function (comment) {
        return React.createElement(
          Comment,
          { author: comment.author, key: comment.id },
          comment.text
        );
      });

      return React.createElement(
        "div",
        { className: "commentList" },
        commentNode
      );
    }
  }]);

  return CommentList;
}(React.Component);

CommentList.propTypes = {
  name: React.PropTypes.string
};

var CommentForm = function (_React$Component3) {
  _inherits(CommentForm, _React$Component3);

  function CommentForm(props) {
    _classCallCheck(this, CommentForm);

    var _this3 = _possibleConstructorReturn(this, (CommentForm.__proto__ || Object.getPrototypeOf(CommentForm)).call(this, props));

    _this3.handleAuthorChange = function (e) {
      _this3.setState({
        author: e.target.value
      });
    };

    _this3.handleTextChange = function (e) {
      _this3.setState({
        text: e.target.value
      });
    };

    _this3.handleSubmit = function (e) {
      e.preventDefault();
      var data = _this3.state;
      _this3.props.onHandleSubmit(data);
    };

    _this3.state = {
      author: "",
      text: ""
    };
    return _this3;
  }

  _createClass(CommentForm, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "form",
        { className: "commentForm", onSubmit: this.handleSubmit },
        React.createElement("input", { type: "text",
          placeholder: "Your name",
          value: this.state.author,
          onChange: this.handleAuthorChange
        }),
        React.createElement("input", {
          type: "text",
          placeholder: "Say something...",
          value: this.state.text,
          onChange: this.handleTextChange
        }),
        React.createElement("input", { type: "submit", value: "Post" })
      );
    }
  }]);

  return CommentForm;
}(React.Component);

CommentForm.propTypes = {
  name: React.PropTypes.string
};

var Comment = function (_React$Component4) {
  _inherits(Comment, _React$Component4);

  function Comment(props) {
    _classCallCheck(this, Comment);

    return _possibleConstructorReturn(this, (Comment.__proto__ || Object.getPrototypeOf(Comment)).call(this, props));
  }

  _createClass(Comment, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "comment" },
        React.createElement(
          "h2",
          { className: "commentAuthor" },
          this.props.author
        ),
        " ",
        this.props.children,
        " "
      );
    }
  }]);

  return Comment;
}(React.Component);

Comment.propTypes = {
  name: React.PropTypes.string
};


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