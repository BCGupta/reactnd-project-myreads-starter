import React, { Component } from "react";
import Book from "./Book";
import SearchInput from "./SearchInput";
import {Link} from "react-router-dom";

class SearchBooks extends Component {
    render() {
        const {searchBooks, myBooks, onSearch, onResetSearch, onMove } = this.props;
        return (
            <div className='search-books'>
                <SearchBar onSearch={onSearch} onResetSearch={onResetSearch}/>
                <SearchResults searchBooks={searchBooks} myBooks={myBooks} onMove={onMove} />
            </div>
        )
    }
}

const SearchResults = props => {
    const { searchBooks, myBooks, onMove } = props;

    const updatedBooks = searchBooks.map(book => {
        myBooks.map(b => {
            if (b.id === book.id) {
                book.shelf = b.shelf;
            }
            return b;
        });
        return book;
    });

    return (
        <div className="search-books-results">
            <ol className="books-grid">
                {searchBooks.map(book => (
                    <Book key={book.id} book={book} shelf={book.shelf ? book.shelf : 'none'} onMove={onMove} />
                ))}
            </ol>
        </div>
    );
};

const SearchBar = props => {
    const {onSearch, onResetSearch } = props;
    return (
        <div className="search-books-bar">
            <CloseSearchButton onResetSearch={onResetSearch} />
            <SearchInput onSearch={onSearch}/>
        </div>
    );
};


const CloseSearchButton = props => {
    const {onResetSearch} = props;
    return (
        <Link to="/">
            <button className="close-search" onClick={onResetSearch}> Close </button>
        </Link>
    );
};


export default SearchBooks;