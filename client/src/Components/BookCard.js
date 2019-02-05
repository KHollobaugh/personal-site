import React from 'react';

const BookCard = props => {
    return (
        <div className='book-card'>
        {props.books.map((book, index) =>
        <div key={index} book={book}>
        <h1>BookCard</h1>
        </div>
        
        )}  
        </div>
    )
}
export default BookCard;