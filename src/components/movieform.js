import React from "react";
import Form from "./common/form/form";
import Joi from "joi-browser";
import { getGenres } from "../services/fakeGenreService";
import { getMovie } from './../services/fakeMovieService';

class MovieForm extends Form {
  state = {
    data: {
      title: "",
      genre: "",
      inStock: "",
      rate: "",
    },
    genres: [], 
    errors: {},
  }; 

  componentDidMount(){      
      const id = this.props.match.params.id;  
      const movie = this.getMovieData(getMovie(id));  
      const genres = getGenres().map(genres => (genres.name)); 
      this.setState({genres: genres, data: movie});   
      
  } 

  getMovieData(movie){
      return {
          title: movie.title, 
          genre: movie.genre.name, 
          inStock: movie.numberInStock, 
          rate: movie.dailyRentalRate
      }
  }


  schema = {
    title: Joi.string().required().label("Title"),
    genre: Joi.string().required().label("Genre"),
    inStock: Joi.number()
      .min(0)
      .max(100)
      .integer()
      .required()
      .label("In Stock"),
    rate: Joi.number().min(0).max(5).required().label("Rate"),
  };

  
  render() {
      
    const { genres } = this.state; 

    return ( 
      <div>
        <h1>Movie Form </h1>
        <form>
            {this.renderInput("title", "Title")}
            {this.renderDropInput("genre", genres, "Genre")} 
            {this.renderInput("inStock", "In Stock")}
            {this.renderInput("rate", "Rate")}
            {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default MovieForm;
