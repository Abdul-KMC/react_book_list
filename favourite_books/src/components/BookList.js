import React from 'react';

function BookList(props) {

    const handleCross = (index) => {
        props.remBook(index);
      };

    return(
        <ul className='dispList'>
            {props.list.map((book, index) => (
                <li key={index}>{book}</li>
            ))}
        </ul>
    )
}

export default BookList