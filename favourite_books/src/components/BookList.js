import React from 'react';

function BookList(props) {

    const handleCross = (index) => {
        props.remBook(index);
      };

    return(
        <ul className='dispList'>
            <li>{props.list[0]}</li>
            <li>{props.list[1]}</li>
            <li>{props.list[2]}</li>
        </ul>
    )
}

export default BookList