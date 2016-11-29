import React from 'react';

class CommentForm extends React.Component {

  constructor() {
    super();
    this.state = {author: '', text: ''};
  }

  handleAuthorChange(e) {
    this.setState({author: e.target.value});
  }

  handleTextChange(e) {
    this.setState({text: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const author = this.state.author.trim();
    const text = this.state.text.trim();
    if (!text || !author) {
      return;
    }
    this.props.onCommentSubmit({author: author, text: text});
    this.setState({author: '', text: ''});
  }

  render() {
    return (
      <form className="form-inline" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Your name"
            value={this.state.author}
            onChange={this.handleAuthorChange}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Say something..."
            value={this.state.text}
            onChange={this.handleTextChange}
          />
        </div>
          <input className="btn btn-success" type="submit" value="Post your comment" />
      </form>
    );
  }
}

export default CommentForm;