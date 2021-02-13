import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import Pagination from './common/pagination';
import paginate from '../utils/paginate';
import Genres from './common/genres';
import { getGenres } from '../services/fakeGenreService';
import MoviesTable from './moviesTable';

class Movie extends Component {
    state = {
        movies: [],
        genres: [],
        pageSize: 4,
        currentPage: 1,
        currentGenre: "0"
    }

    componentDidMount() {
        this.setState({
            movies: getMovies(),
            genres: [{ _id: "0", name: "All Genres" }].concat(getGenres())
        })
    }

    render() {
        const { length: count } = this.getMoviesByGenre();
        const { pageSize, currentPage, currentGenre, genres } = this.state; 

        const moviesByGenre = this.getMoviesByGenre();
        const movies = paginate(moviesByGenre, currentPage, pageSize); 

        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-3">
                        <Genres
                            genres={genres}
                            currentGenre={currentGenre} 
                            onGenreChange={this.handleGenreChange}
                        />
                    </div> 
                    
                    <div className="col">
                        <h1>Movies table</h1> 
                        <MoviesTable 
                            movies={movies}
                            onLike={this.handleLike} 
                            onDelete={this.handleDelete}
                        /> 
                        <Pagination
                            itemsCount={count}
                            pageSize={pageSize}
                            onPageChange={this.handlePageChange}
                            currentPage={currentPage}
                        />
                    </div>

                </div>
            </React.Fragment>

        );
    }

    getMoviesByGenre = () => {
        const { currentGenre, movies } = this.state;
        return currentGenre === '0' ? movies : movies.filter(movie => movie.genre._id === currentGenre);
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
        this.setState({ currentPage: page });
    }

    handleGenreChange = genre => {
        this.setState({ currentGenre: genre._id });
    }



}

export default Movie;