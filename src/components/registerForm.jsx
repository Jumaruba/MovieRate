import React, { Component } from "react";
import Form from "./common/form";
import Input from "./common/input";
import  Joi  from 'joi-browser'; 

class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {},
  };

  // TODO: create schema
  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),  
    name: Joi.string().required().label("Name"), 
    
  }

  render() {
    return (
      <div>
        <h1>Register Form</h1>
        <form onSubmit={this.handleSubmit}>
            {this.renderInput("username", "Username")} 
            {this.renderInput("password", "Password", "password")}
            {this.renderInput("name", "Name", "name")}
            {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
