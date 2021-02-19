import React from "react";
import NavBar from "./navbar";
import { Route, Switch, Redirect } from "react-router-dom"; 

import Movie from "./components/movie";
import NotFound from "./components/notfound";
import LoginForm from './components/loginForm';
import MovieForm from "./components/movieForm";  

import Rentals from "./rentals";
import Customers from "./Customers";  

const App = () => {
  return (
    <div>
      <NavBar />
      <br/>
      <main className="container">
        <Switch> 
          <Route path="/login" component={LoginForm} />
          <Route path="/movies/:id" component={MovieForm}/>
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
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
