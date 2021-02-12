import React, { Component } from 'react';

const Genres = (props) => {
    const { genres } = props;  
    return (
        <ul className="list-group"> 
            { genres.map(genre => (<li className="list-group-item">{genre.name}</li>)) } 
        </ul>
    );
}

export default Genres;