exports.CommentList = React.createClass({
  render: function () {


    function renderComment(comment) {
      return (
        <c.Comment author={comment.author} key={comment.id}>
          {comment.text}
        </c.Comment>)
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
});