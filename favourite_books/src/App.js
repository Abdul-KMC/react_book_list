import React, { useState } from 'react';
import './App.css';
import BookList from './components/BookList';
import AddBookForm from './components/AddBookForm';

// const bookList = {
//   book1: "A Study in Scarlet & The Sign of Four",
//   book2: "The Hound of the Baskervilles & The Valley of Fear",
//   book3: "The Adventures of Sherlock Holmes"
// }

function App() {

  const [bookList, setBookList] = useState(["A Study in Scarlet & The Sign of Four", "The Hound of the Baskervilles & The Valley of Fear", "The Adventures of Sherlock Holmes"]);
  const [newBook, updateNewBook] = useState('');

  const handleChange = (event) => {
    updateNewBook(event.target.value);
  }

  const addBook = (event) => {
    event.preventDefault();
    setBookList([...bookList, newBook]);
    updateNewBook('');
  }

  const removeBook = (index) => {
    const updatedList = [...bookList];
    updatedList.splice(index, 1);
    setBookList(updatedList);
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