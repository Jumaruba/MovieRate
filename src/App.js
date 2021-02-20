import React from "react";
import NavBar from "./navbar";
import { Route, Switch, Redirect } from "react-router-dom";

import Movie from "./components/movie";
import NotFound from "./components/notfound";
import LoginForm from "./components/loginForm";
import MovieForm from "./components/movieForm";
import RegisterForm from "./components/registerForm";


const App = () => {
  return (
    <div>
      <NavBar />
      <br />
      <main className="container">
        <Switch>
          <Route path="/movies/new" component={MovieForm} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/login" component={LoginForm} />
          <Route path="/movies/:id" component={MovieForm} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/movies" component={Movie} />
          <Redirect from="/" exact to="/movies" url="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </div>
  );
};

export default App;
