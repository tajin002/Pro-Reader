import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Book from '../Book/Book';
import { Footer } from '../Footer/Footer';

const Books = () => {
    const books = useLoaderData().books;
    // const booksData = books.books
    console.log(books);
    return (
        <div className='mt-24 mx-32 gap-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                books.map(book =><Book key={book.isbn13} book={book} />)
            }
        </div>
    );

    
};

export default Books;