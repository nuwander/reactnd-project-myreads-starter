import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

/**
 * @description Represents a grid of books
 * @param  {Object} props
 */
function BookGrid(props) {
  const { books, existingBooks, updateShelf } = props

  return (
    <ol className="books-grid">
      { books && books.length > 0 &&
        books.map(book => 
        {
          let foundBook = existingBooks ? existingBooks.find( b => b.id === book.id ) : ''
          return <Book  
              key={book.id} 
              book={book} 
              shelf={book.shelf ? book.shelf : foundBook ? foundBook.shelf : 'none'} 
              updateShelf={updateShelf} />
        })
      }
    </ol>
  )
}

BookGrid.propTypes = {
  books: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.object
  ]),
  existingBooks: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.object
  ])
}

export default BookGrid
