import React from 'react';
import Like from './Like'; 

const MoviesTable = (props) => {
    const { movies, onDelete, onLike } = props;
    
    if (movies.length === 0 ) return (<p> No movies to display!</p>)
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Genre</th>
                    <th scope="col">In Stock</th>
                    <th scope="col">Rate</th>
                    <th> </th>
                    <th> </th>
                </tr>

            </thead>
            <tbody>
                {movies.map(movie => (
                    <tr key={movie._id}>
                        <td>{movie.title}</td>
                        <td>{movie.genre.name}</td>
                        <td>{movie.numberInStock}</td>
                        <td>{movie.dailyRentalRate}</td>
                        <td> <Like
                            liked={movie.liked}
                            onClick={() => onLike(movie)} /> </td>
                        <td>
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={() => onDelete(movie)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}



export default MoviesTable;