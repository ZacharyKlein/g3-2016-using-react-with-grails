exports.CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.sort(function(a, b) {
      return b.id - a.id;
    }).map(function(comment) {
      return (
        <c.Comment author={comment.author} key={comment.id}>
          {comment.text} - {comment.id}
        </c.Comment>
      );
    });
    return (
      <div className="well">
        {commentNodes}
      </div>
    );
  }
});