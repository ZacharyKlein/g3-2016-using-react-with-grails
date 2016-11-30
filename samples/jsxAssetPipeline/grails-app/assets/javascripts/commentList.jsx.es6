import React from 'react';
import Comment from './comment';

class CommentList extends React.Component {
  render() {
    function renderComment(comment) {
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>)
    }

    var sortedComments = this.props.comments != undefined ?
      this.props.comments.sort(function (a, b) {
        return b.id - a.id;
      }) : [];

    return (
      <div className="well">
        {sortedComments.map(renderComment)}
      </div>
    );
  }
}

export default CommentList;