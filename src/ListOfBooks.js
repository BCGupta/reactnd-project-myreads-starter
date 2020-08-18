import React, {Component} from "react";
import Bookcase from './Bookcase';
import OpenSearchButton from './OpenSearchButton'

class ListOfBooks extends Component {
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

export default ListOfBooks;