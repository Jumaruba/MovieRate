import React from 'react';
import ReactDOM from 'react-dom';
import Movie from './components/Movie';
import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render(
  <React.StrictMode>
    <main className="container">
    <h1>Movies table</h1>
      <Movie />
    </main>
  </React.StrictMode>,
  document.getElementById('root')
);

