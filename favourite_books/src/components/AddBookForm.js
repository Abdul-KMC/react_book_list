import React, { useEffect, useState } from 'react';


export default function AddBookForm() {
    
    const [newBook, updateNewBook] = useState('Book title here');

    const handleChange = (event) => {
        updateNewBook(event.target.value);
    }

    const addBook = (event) => {
        console.log("Add book working properly");
    }

  return (
    <div>
        <form>
        <label>
          Add book to your list 
          <input type="text" value={newBook} onChange={handleChange} />
        </label>
        <input type="submit" value="Add" onClick={addBook}/>
      </form>
    </div>
  )
}


{/* <form onSubmit={this.handleSubmit}>
        <label>
          Name: "Add book to your list"
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form> */}