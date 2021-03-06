import React, { Component } from "react"
import PropTypes from "prop-types"

/**
 * @description Represents a book
 * @param  {Object} props
 */
class Book extends Component {
  onUpdateShelf = event => {
    this.props.updateShelf(this.props.book, event.target.value)
  }

  render() {
    const { book, shelf } = this.props

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage:
                  book.imageLinks && "url(" + book.imageLinks.thumbnail + ")"
              }}
            />
            <div className="book-shelf-changer">
              <select value={shelf} onChange={this.onUpdateShelf}>
                <option value="move" disabled>
                  Move to... 
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">
            {book.authors &&
              book.authors.map((author, index) => (
                <React.Fragment key={index}>
                  {!!index && ", "}
                  {author}
                </React.Fragment>
              ))}
          </div>
        </div>
      </li>
    )
  }
}

Book.propTypes = {
  book: PropTypes.object.isRequired
}

export default Book
