import React, { Component } from 'react';

const Genres = (props) => {
    const { genres, currentGenre, onGenreChange, textProperty, valueProperty } = props;
    return (
        <ul className="list-group">
            { genres.map(genre => ( 
                <li
                    key={genre[valueProperty]}
                    className={currentGenre === genre[valueProperty]? "list-group-item active" : "list-group-item"}
                    onClick={() => onGenreChange(genre)}
                    style={{cursor:"pointer"}}
                >
                    {genre[textProperty]}
                </li>
            ))
            }
        </ul>
    );
}

Genres.defaultProps = {
    textProperty: 'name', 
    valueProperty: "_id"
}; 

export default Genres;