import React from "react"
import { Route, Link } from "react-router-dom"
import * as BooksAPI from "./BooksAPI"
import "./App.css"
import SearchPage from "./SearchPage"
import Bookshelf from "./Bookshelf"

class BooksApp extends React.Component {
  state = {
    shelves: [
      {
        key: "currentlyReading",
        name: "Currently Reading"
      },
      {
        key: "wantToRead",
        name: "Want to Read"
      },
      {
        key: "read",
        name: "Read"
      }
    ],
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState(() => ({
        books
      }))
    })
  }

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      BooksAPI.getAll().then(books => {
        this.setState(() => ({
          books
        }))
      })
    })
  }

  render() {
    return (
      <div className="app">
        <Route
          exact path="/"
          render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>

              <div className="list-books-content">
                {this.state.shelves.map(shelf => (
                  <Bookshelf
                    key={shelf.key}
                    name={shelf.name}
                    books={this.state.books.filter(
                      book => book.shelf === shelf.key
                    )}
                    updateShelf={this.updateShelf}
                  />
                ))}
              </div>

              <div className="open-search">
                <Link to="/search">Add a book</Link>
              </div>
            </div>
          )}
        />
        <Route
          path="/search"
          render={({ history }) => (
            <SearchPage existingBooks={this.state.books} updateShelf={this.updateShelf}/>
          )}
        />
      </div>
    )
  }
}

export default BooksApp
