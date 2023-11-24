// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import BookList from './components/BookList';
import AddBookForm from './components/AddBookForm';

function App() {

  const [bookList, setBookList] = useState([]);
  const [newBook, updateNewBook] = useState('');

  useEffect(() => {
    // Fetch initial book list
    fetchBookList();
  }, []);

  const fetchBookList = async () => {
    try {
      const response = await fetch('https://655e14659f1e1093c59a7c39.mockapi.io/shelf/list');
      const data = await response.json();
      setBookList(data.map(book => book.Title));
    } catch (error) {
      console.error('Error fetching book list:', error);
    }
  };

  const handleChange = (event) => {
    updateNewBook(event.target.value);
  }

  const addBook = async (event) => {
    event.preventDefault();
    
    try {
      // POST request to add a new book
      await fetch('https://655e14659f1e1093c59a7c39.mockapi.io/shelf/list', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Title: newBook,
          Cover: 'https://loremflickr.com/640/480',
          url: 'http://example.com',
        }),
      });

      // Fetch updated book list
      fetchBookList();

      // Clear the input
      updateNewBook('');
    } catch (error) {
      console.error('Error adding book:', error);
    }
  }

  const removeBook = async (index) => {
    try {
      const response = await fetch(`https://655e14659f1e1093c59a7c39.mockapi.io/shelf/list/${index + 1}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Fetch updated book list
        fetchBookList();
      } else {
        console.error('Error deleting book:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  }

  return (
    <div className="App">
      <h1 className="title">Favorite Books</h1>
      <h3 className="description">Add all your favorite books here.</h3>
      <AddBookForm new={newBook} inputChange={handleChange} updateList={addBook}/> 
      <BookList list={bookList} remBook={removeBook}/>
    </div>
  );
}

export default App;
