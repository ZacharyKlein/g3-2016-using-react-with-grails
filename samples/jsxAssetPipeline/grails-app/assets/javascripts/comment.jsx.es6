import React from 'react';

class Comment extends React.Component {
  render() {
    return <div className="alert alert-info">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        {this.props.children}
      </div>;
  }
};

export default Comment;