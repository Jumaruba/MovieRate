import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import Like from './Like';
import Pagination from './common/pagination'; 

class Movie extends Component {
    state = {
        movies: getMovies(),
        pageSize: 4

    }

    render() { 
        const { length:count } = this.state.movies; 
        return (
            <React.Fragment> 
                {count === 0 ? <p>No movies to display yet</p> : this.displayMovieTable()}   
                <Pagination 
                    itemsCount={count} 
                    pageSize={this.state.pageSize} 
                    onPageChange={this.handlePageChange} 
                /> 
            </React.Fragment>
        );
    }

    displayMovieTable() {
        return (
            <table className="table">
                {this.displayMovieHeader()}
                <tbody>
                    {this.state.movies.map(movie => this.displayMovieBody(movie))}
                </tbody>
            </table>
        );
    }

    displayMovieHeader() {
        return <thead>
            <tr>
                <th scope="col">Title</th>
                <th scope="col">Genre</th>
                <th scope="col">In Stock</th>
                <th scope="col">Rate</th>
                <th> </th>
                <th> </th>
            </tr>

        </thead>;
    } 

    displayMovieBody(movie) {
        const { _id, title, genre, numberInStock, dailyRentalRate } = movie;

        return (
            <tr key={_id}>
                <td>{title}</td>
                <td>{genre.name}</td>
                <td>{numberInStock}</td>
                <td>{dailyRentalRate}</td>
                <td> <Like
                    liked={movie.liked}
                    onClick={() => this.handleLike(movie)} /> </td>
                <td><button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => this.handleDelete(movie)}
                >
                    Delete
                </button> </td>
            </tr>
        );
    }



    handleLike = movie => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = { ...movies[index] };
        movies[index].liked = !movies[index].liked;
        this.setState({ movies });
    }

    handleDelete = movie => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({ movies });
    }

    handlePageChange = page => {
        console.log(page); 
    }

}

export default Movie;