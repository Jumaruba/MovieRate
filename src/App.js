import React from "react";
// import NavBar from './navbar';
import { Route, Switch, Redirect } from "react-router-dom"; 
import Movie from './components/movie';   
import NotFound from './components/notfound'; 


const App = () => {
  return (
    <div>
      <Switch>    
        <Route path="/not-found" component={NotFound} /> 
        <Route path="/movies" component={Movie} /> 
        <Redirect from="/" exact to="/movies" url="/movies" />  
        <Redirect to="/not-found" /> 
      </Switch>
    </div>
  );
};

export default App;
