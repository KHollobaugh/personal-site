import React, { Component } from 'react';
import bookData from '../data/bookData';
import BookCard from '../Components/BookCard';

class ReadingList extends Component {
    constructor() {
      super();
      this.state={
        books: [],
      }
    }
  
    componentDidMount() {
      setTimeout(() => {
        this.setState({
          books: bookData,
        });
      }, 0);
    }

    render(){
    return (
        <div className="portfolio-page">
          <h1>Reading List</h1>
      <BookCard books={this.state.books}/>
        </div>
    )
}
}


export default ReadingList;