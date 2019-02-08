import React from 'react';

const BookCard = props => {
    return (
        <div className='book-card'>
        {props.books.map((book, index) =>
        <div key={index} book={book}>
        <a href={book.url}>
        <img src={book.image} alt="book-title"/>
        </a>
        
        </div>
        
        )}  
        </div>
    )
}
export default BookCard;