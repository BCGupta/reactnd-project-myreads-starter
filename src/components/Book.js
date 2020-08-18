import React from 'react';
import ChangeShelf from './ChangeShelf';

const Book = ({ book, shelf, onMove }) => (
    <li>
        <div className="book">
            <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${
                            book.imageLinks
                                ? book.imageLinks.thumbnail
                                : 'icons/book-placeholder.svg'
                        })`
                    }}
                />
                <ChangeShelf book={book} shelf={shelf} onMove={onMove} />
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">
                {book.authors ? book.authors.join(', ') : 'Author Unknown'}
            </div>
        </div>
    </li>
);

export default Book;