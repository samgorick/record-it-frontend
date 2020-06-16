import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = (props) => (
  <div className="ui inverted fixed menu sixteen wide column">
    <div className="ui container">
      <NavLink to='/notes' className="item">Flatnote</NavLink>
      <NavLink to='/notes/new' className="floated right item">New Note</NavLink>
      <NavLink to='/login' className="floated right item" onClick={props.logout}>Sign Out</NavLink>
    </div>
  </div>
);

export default NavBar;
