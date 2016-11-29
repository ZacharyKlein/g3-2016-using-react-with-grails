import React from 'react';
import ReactDOM from 'react-dom';

require('./../styles/style.css');
require('whatwg-fetch');

import BookForm from './book-form';
import BookList from './book-list';

class Books extends React.Component {

  constructor() {
    super();

    this.submitNewBook = this.submitNewBook.bind(this);
    this.state = { books: [] };
  }

  submitNewBook(book) {
    fetch('/api/book', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(book)
    }).then(r => r.json())
      .then(json => {
        let books = this.state.books;
        books.push({id: json.id, author: json.author, title: json.title});
        this.setState({books});
      })
      .catch(ex => console.error('Unable to load books', ex));
  }

  componentDidMount() {
    fetch('/api/book')
      .then(r =>  r.json())
      .then(json => this.setState({books: json}))
      .catch(ex => console.error('parsing failed', ex))
  }

  render() {
    return(
      <div>
        <BookForm onSubmit={this.submitNewBook}/>
        <BookList books={this.state.books} />
      </div>
    );
  }
}

ReactDOM.render(<Books />, document.getElementById('books'));