exports.CommentBox = React.createClass({

  getInitialState: function () {
    return {comments: []};
  },
  componentDidMount: function () {
    this.loadComments();
  },
  loadComments: function () {
    var _this = this;
    fetch('/api/comments')
      .then(function (response) {
        return response.json()
      }).then(function (json) {

      var comments = json.map(function(j) {
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
  },
  handleCommentSubmit: function (comment) {
    var _this = this;
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
      var data = _this.state.comments;
      var _comment = {id: json.id, author: json.author, text: json.text};
      data.push(_comment);
      _this.setState({comments: data});
    }).catch(function (ex) {
      console.error('Unable to load comments', ex);
      return null;
    });
  },
  render: function () {
    return (
      <div className="commentBox">
        <h1>Make a comment!</h1>
        <cf.CommentForm onCommentSubmit={this.handleCommentSubmit}/>
        <cl.CommentList comments={this.state.comments}/>

      </div>
    );
  }
});