import React from "react";
import Form from "./common/form/form";
import Joi from "joi-browser";
import { getGenres } from "../services/fakeGenreService";
import { getMovie, saveMovie } from "./../services/fakeMovieService";

class MovieForm extends Form {
  state = {
    data: {
      _id: "",
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: "",
    },
    genres: [],
    errors: {},
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    const movie = getMovie(id);
    const genres = getGenres();
    if (movie) {
      const data = this.getMovieData(movie);
      this.setState({ data });
    }
    this.setState({ genres });

  }

  getMovieData(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };
  }

  saveCurrentMovie = (e) => {
    e.preventDefault();
    saveMovie(this.state.data); 

    this.props.history.push("/movies");
  };

  schema = {
    _id: Joi.string().optional().allow(''),
    title: Joi.string().required().label("Title"),
    genreId: Joi.string().required().label("Genre"),
    numberInStock: Joi.number()
      .min(0)
      .max(100)
      .integer()
      .required()
      .label("In Stock"),
    dailyRentalRate: Joi.number().min(0).max(5).required().label("Rate"),
  };

  render() {
    const { genres } = this.state;

    return (
      <div>
        <h1>Movie Form </h1>
        <form onSubmit={this.saveCurrentMovie}>
          {this.renderInput("title", "Title")}
          {this.renderDropInput("genreId", genres, "Genre")}
          {this.renderInput("numberInStock", "In Stock")}
          {this.renderInput("dailyRentalRate", "Rate")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default MovieForm;
