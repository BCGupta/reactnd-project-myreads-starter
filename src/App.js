import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Router, Link } from 'react-router-dom';

class BooksApp extends React.Component {
  state = {};

  render() {
    return (
      <div className="app">
        <Route exact path="/" component={listOfBooks}/>
        <Route exact path="/" component={searchBooks}/>
      </div>
    )
  }
}

class listOfBooks extends Component {
  render() {
    return (
        <div className='list-books'>
        </div>
    )
  }
}

class searchBooks extends Component {
  render() {
    return (
        <div className='search-books-results'>
    )
  }
}

export default BooksApp
