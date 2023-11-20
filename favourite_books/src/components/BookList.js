import React from 'react';

function BookList(props) {

    return(
        <ul>
            <li>{props.list.book1}</li>
            <li>{props.list.book2}</li>
            <li>{props.list.book3}</li>
        </ul>
    )
}

export default BookList