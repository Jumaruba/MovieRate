import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  state = {
    activeOption: "Movies",
    barOptions: [
      { name: "Movies", path: "/Movies" },
      { name: "Customers", path: "/Customers" },
      { name: "Rentals", path: "/Rentals" },
    ],
  }; 

  getNavItemClass(name){ 
      if (this.state.activeOption === name ) 
        return "nav-item active";
    return "nav-item"; 
  }

  onOptionClick(name){
      this.setState({activeOption: name}); 
  } 
  
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark fixed-top- bg-dark">
        <Link className="navbar-brand">Vidly</Link>
        <ul className="navbar-nav mr-auto">
          {this.state.barOptions.map((option) => (
            <li className={this.getNavItemClass(option.name)} onClick={() => this.onOptionClick(option.name)}>
              <Link className="nav-link" to={option.path}>{option.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default NavBar;
