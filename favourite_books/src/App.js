import './App.css';
import BookList from './components/BookList';

const bookList = {
  book1: "A Study in Scarlet & The Sign of Four",
  book2: "The Hound of the Baskervilles & The Valley of Fear",
  book3: "The Adventures of Sherlock Holmes"
}

function App() {
  return (
    <div className="App">
      <h1 className="title">Favourite Books</h1>
      <h3 className="description">Add all your favourite books here.</h3>
      <BookList list={bookList}  />
    </div>
  );
}

export default App;
