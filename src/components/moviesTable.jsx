import React, { Component } from 'react';
import TableHeader from "./common/tableHeader";
import Like from './common/like';


class MoviesTable extends Component { 

    columns = [
        { path: 'title', label: 'Title'},  
        { path: 'genre.name', label: 'Genre'}, 
        { path: 'numberInStock', label: 'In Stock'}, 
        { path: 'dailyRentalRate', label: 'Rate'},  
        { key: 'like' }, 
        { key: 'delete' }
    ];  

    render() {
        const { movies, onDelete, onLike, onSort, sortColumn } = this.props;

        if (movies.length === 0) return (<p> No movies to display!</p>)

        return (
            <table className="table">
                < TableHeader columns={this.columns} sortColumn={sortColumn} onSort={onSort}/> 
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
}


export default MoviesTable;