import React from "react";
import NavBar from "./navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import Movie from "./components/movie";
import NotFound from "./components/notfound";
import Rentals from "./rentals";
import Customers from "./Customers";
import MovieForm from "./components/movieform"; 

const App = () => {
  return (
    <div>
      <NavBar />

      <main className="container">
        <Switch> 
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
