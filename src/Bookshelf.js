import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookGrid from './BookGrid'

/**
 * @description Represents the shelf of books
*/
class Bookshelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired
  }

  render() {
    const { books, name, updateShelf } = this.props

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{name}</h2>
        <div className="bookshelf-books">
          <BookGrid books={books} updateShelf={updateShelf} />
        </div>
      </div>
    )
  }
}

export default Bookshelf
