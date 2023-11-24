import React from 'react';

function BookList(props) {

    return (
        <ul className='dispList'>
            {props.list.map((book, index) => (
                <li key={index}>
                    {book}
                    <button onClick={() => props.remBook(index)}>X</button>
                </li>
            ))}
        </ul>
    )
}

export default BookList;
