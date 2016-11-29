/**
 * Created by zak on 11/28/16.
 */
import React from 'react';


class BookList extends React.Component {

  render() {
    function renderBookRow(book) {
       return(<tr key={book.id}>
         <td className="title">{book.title}</td>
         <td className="author">{book.author}</td>
       </tr>);
    }

    return(
      <div>
        <h3>Books</h3>
      <table className="table table-striped">
        <tbody>
          <tr>
            <th>Title</th>
            <th>Author</th>
          </tr>

          {this.props.books.map(renderBookRow)}
        </tbody>


      </table>
      </div>
    );

  }
}


const {array} = React.PropTypes;
BookList.propTypes = {
  books: array
};

export default BookList;