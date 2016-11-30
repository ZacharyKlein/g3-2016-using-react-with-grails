/**
 * Created by zak on 11/28/16.
 */
import React from 'react';

class BookForm extends React.Component {

  constructor() {
    super();
    this.state = { author: '', title: '' };

    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const author = this.state.author.trim();
    const title = this.state.title.trim();
    if (!title || !author) {
      return;
    }
    this.props.onSubmit({author: author, title: title});
    this.setState({author: '', title: ''});
  }

  handleAuthorChange(event) {
    this.setState({ author: event.target.value });
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  render() {

    return(
      <div>
        <h3>Add a book:</h3>
      <form className="form form-inline" onSubmit={this.handleSubmit}  >
        <label>Title</label>
        <input className="form-control" name="title" type="text" value={ this.state.title } onChange={ this.handleTitleChange } />
        <label>Author</label>
        <input className="form-control" name="author" type="text" value={ this.state.author } onChange={ this.handleAuthorChange }/>

        <input className="btn btn-success"  type="submit" value="Add to library" />
      </form>
      </div>
    );

  }
}

const {string, func} = React.PropTypes;
BookForm.propTypes = {
  title: string,
  author: string,
  onSubmit: func
};

export default BookForm;