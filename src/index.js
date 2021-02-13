import React from 'react';
import ReactDOM from 'react-dom';
import Movie from './components/Movie';
import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render(
  <React.StrictMode>
    <main className="container">
      <Movie />
    </main>
  </React.StrictMode>,
  document.getElementById('root')
);

