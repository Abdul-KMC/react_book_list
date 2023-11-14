import './App.css';
import BookList from './BookList';

function App() {
  return (
    <div className="App">
      <h1 className="title">Favourite Books</h1>
      <p className="description">Add all your favourite books here.</p>
      <BookList/>
    </div>
  );
}

export default App;
