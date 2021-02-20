import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Pagination from "./common/pagination";
import Genres from "./common/genres";
import SearchBar from "./common/searchBar";
import paginate from "../utils/paginate";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./moviesTable";
import handleQuickSort from "../utils/sorting";
import { Link } from "react-router-dom";

class Movie extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    currentGenre: "0",
    searchQuery: "",
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    this.setState({
      movies: getMovies(),
      genres: [{ _id: "0", name: "All Genres" }].concat(getGenres()),
    });
  }

  getMoviesByGenre = () => {
    const { currentGenre, movies } = this.state;
    return currentGenre === "0"
      ? movies
      : movies.filter((movie) => movie.genre._id === currentGenre);
  };

  getPageData = (sortColumn, currentPage, pageSize) => {
    const { movies, searchQuery } = this.state;
    let filtered = movies;
    if (searchQuery)
      filtered = movies.filter( m =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else filtered = this.getMoviesByGenre();

    const sortedMovies = handleQuickSort(
      filtered,
      sortColumn.path,
      sortColumn.order
    );
    return paginate(sortedMovies, currentPage, pageSize);
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreChange = (genre) => {
    this.setState({ currentGenre: genre._id, searchQuery: "", currentPage: 1 });
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query, currentGenre: null, currentPage: 1 });
  };
  render() {
    const { length: count } = this.getMoviesByGenre();
    const {
      pageSize,
      currentPage,
      currentGenre,
      genres,
      sortColumn,
      searchQuery,
    } = this.state;

    const movies = this.getPageData(sortColumn, currentPage, pageSize);
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-3">
            <br />
            <br />
            <br />
            <Genres
              genres={genres}
              currentGenre={currentGenre}
              onGenreChange={this.handleGenreChange}
            />
          </div>

          <div className="col">
            <h1>Movies table </h1>

            <SearchBar value={searchQuery} onChange={this.handleSearch} />
            <MoviesTable
              movies={movies}
              sortColumn={sortColumn}
              onLike={this.handleLike}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
            />
            <Link to="/movies/new">
              <button
                style={{ marginBottom: "1em" }}
                className="btn btn-primary"
              >
                Add movie
              </button>
            </Link>

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
}

export default Movie;
