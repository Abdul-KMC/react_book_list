import React from 'react';


export default function AddBookForm(props) {

    return (
      <div>
        <form onSubmit={props.updateList}>
          <label>
            Enter Book Title
            <input type="text" value={props.new} onChange={props.inputChange} />
          </label>
          <input type="submit" value="Add" />
        </form>
      </div>
    );
}