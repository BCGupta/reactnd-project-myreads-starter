import React, {Component} from "react";
import Book from "./Book";
import {Link} from "react-router-dom";

class BookList extends Component {
    render() {
        const { bookshelves, books, onMove } = this.props;
        return (
            <div className='list-books'>
                <div className="list-books-title">
                    <h1>My Reads</h1>
                </div>
                <Bookcase bookshelves={bookshelves} books = {books} onMove = {onMove} />
                <OpenSearchButton />
            </div>
        )
    }
}

const Bookcase = props => {
    const { bookshelves, books, onMove } = props;
    return (
        <div className="list-books-content">
            <div>
                {bookshelves.map(shelf => (
                    <Bookshelf key={shelf.key} shelf={shelf} books= {books} onMove={onMove} />
                ))}
            </div>
        </div>
    );
};

const Bookshelf = props => {
    const { shelf, books, onMove } = props;
    const booksOnThisShelf = books.filter(book => book.shelf === shelf.key);
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelf.name}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {booksOnThisShelf.map(book => (
                        <Book key={book.id} book={book} shelf={shelf.key} onMove={onMove} />
                    ))}
                </ol>
            </div>
        </div>
    );
};

const OpenSearchButton = () => {
    return (
        <div className="open-search">
            <Link to="search">
                <button>Add a Book</button>
            </Link>
        </div>
    );
};

export default BookList;