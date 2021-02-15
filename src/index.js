import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom"; 
import App from './App'; 

ReactDOM.render(
  <React.StrictMode>
    <main className="container">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </main>
  </React.StrictMode>,
  document.getElementById("root")
);
