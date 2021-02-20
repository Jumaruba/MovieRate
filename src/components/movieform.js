import React from "react";
import Form from "./common/form/form";
import Joi from "joi-browser";

class MovieForm extends Form {
  state = {
    data: {
      title: "",
      genre: "",
      inStock: "",
      rate: "",
    },
    errors: {},
  };

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
      
    return (
      <div>
        <h1>Movie Form </h1>
        <form>
            {this.renderInput("title", "Title")}
            {this.renderDropInput("genre", ["action", "romance", "thriller"], "Genre")} 
            {this.renderInput("inStock", "In Stock")}
            {this.renderInput("rate", "Rate")}
            {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default MovieForm;
