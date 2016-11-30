import React from 'react';
import CommentForm from 'commentForm';
import CommentList from 'commentList';

class CommentBox extends React.Component {
  constructor() {
    super();
    this.state = {comments: []}
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }

  componentDidMount() {
    this.loadComments();
  }

  loadComments() {
    const _this = this;
    fetch('/api/comments')
      .then(function (response) {
        return response.json()
      }).then(function (json) {

      const comments = json.map(function(j) {
        console.log(j.id);
        console.log(j.text);
        return {key: j.id, id: j.id, author: j.author, text: j.text}
      } );

      console.log(comments);

      _this.setState({comments: comments});
    }).catch(function (ex) {
      console.error('Unable to load comments', ex);
      return null;
    })
  }

  handleCommentSubmit(comment) {
    const _this = this;
    fetch('/api/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(comment)
    }).then(function (response) {
      return response.json()
    }).then(function (json) {
      console.log(json);
      let data = _this.state.comments;
      const _comment = {id: json.id, author: json.author, text: json.text};
      data.push(_comment);
      _this.setState({comments: data});
    }).catch(function (ex) {
      console.error('Unable to load comments', ex);
      return null;
    });
  }

  render() {
    return (
      <div className="commentBox">
        <h1>Make a comment!</h1>
        <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
        <CommentList comments={this.state.comments}/>

      </div>
    );
  }
}

export default CommentBox;