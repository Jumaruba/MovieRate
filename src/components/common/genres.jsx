import React, { Component } from 'react';

const Genres = (props) => {
    const { genres, currentGenre, onGenreChange } = props;
    return (
        <ul className="list-group">
            { genres.map(genre => ( 
                <li
                    key={genre._id}
                    className={currentGenre === genre._id ? "list-group-item active" : "list-group-item"}
                    onClick={() => onGenreChange(genre)}
                >
                    {genre.name}
                </li>
            ))
            }
        </ul>
    );
}

export default Genres;