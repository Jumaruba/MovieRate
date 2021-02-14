import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'; 
import Movie from './components/movie';


ReactDOM.render(
  <React.StrictMode>
    <main className="container"> 
      <Movie />
    </main>
  </React.StrictMode>,
  document.getElementById('root')
);

