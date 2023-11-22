import React, { useState } from 'react';


export default function AddBookForm(props) {
    
    const [newBook, updateNewBook] = useState('');

    const handleChange = (event) => {
        updateNewBook(event.target.value);
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      props.updateList(newBook);
      updateNewBook('');
    };

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Add book to your list
            <input type="text" value={newBook} onChange={handleChange} />
          </label>
          <input type="submit" value="Add" />
        </form>
      </div>
    );
}


{/* <form onSubmit={this.handleSubmit}>
        <label>
          Name: "Add book to your list"
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form> */}