import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';

require('whatwg-fetch');

import BookForm from './book-form';
import BookList from './book-list';

class Books extends React.Component {

  constructor(props) {
    super(props);

    this.submitNewBook = this.submitNewBook.bind(this);
    this.state = { books: props.books };
  }

  submitNewBook(book) {
     fetch('/api/books', {
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
    console.log('componentDidMount');
    fetch('/api/books')
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



if (typeof window !== 'undefined' && typeof document !== 'undefined' && typeof document.createElement === 'function') {
  window.renderClient = (data) => {
    ReactDOM.render(<Books books={data.books} />, document.getElementById('books'));
  }
}
else {
  global.renderServer = (data) => {
    let json = JSON.parse(data);
    return ReactDOMServer.renderToString (
      <Books books={json.books} />
    )
  };
}
