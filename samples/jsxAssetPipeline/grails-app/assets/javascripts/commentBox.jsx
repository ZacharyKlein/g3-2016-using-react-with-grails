exports.CommentBox = React.createClass({

  getInitialState: function() {
    return {comments: [
      {id: 1, author: "David Estes", text: "This is one comment"},
      {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
    ]};
  },
  handleCommentSubmit: function(c) {
    var data = this.state.comments;

    console.log(data.toString());

    var ids = data.map(function(a) {return a.id});

    console.log('ids: ' + ids);

    var nextId = Math.max.apply(null, ids) + 1;

    console.log('nextId: ' + nextId);
    var comment = {author: c.author, text: c.text, id: nextId};

    data.push(comment);

    this.setState({comments: data});

  },
  render: function() {
    return (
      <div className="commentBox">
        <h1>Make a comment!</h1>
        <cf.CommentForm onCommentSubmit={this.handleCommentSubmit}/>
        <cl.CommentList data={this.state.comments}/>

      </div>
    );
  }
});